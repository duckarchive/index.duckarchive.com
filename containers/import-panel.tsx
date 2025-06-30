"use client";

import { useState } from "react";
import { Input } from "@heroui/input";
import Papa from "papaparse";
import { Prisma } from "@duckarchive/prisma";
import {
  SafeParseError,
  SafeParseReturnType,
  SafeParseSuccess,
  ZodError,
} from "zod";
import { PersonCreateManyInputObjectSchema } from "@/generated/prisma/client/schemas";

import { FileFormat, ParsedFileContent } from "@/types";
import Table from "@/components/table";

type TableItem = {
  success: boolean;
  data: Prisma.PersonCreateManyInput;
  error?: ZodError<Prisma.PersonCreateManyInput>;
};

const ImportPanel: React.FC = () => {
  const [inputContent, setInputContent] = useState<TableItem[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target?.result;
      const fileName = file.name;
      const fileFormat = fileName.split(".").pop() as FileFormat;

      if (fileContent) {
        if (fileFormat === FileFormat.CSV) {
          Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: ({ data: rows }: { data: ParsedFileContent }) => {
              if (rows.length > 0) {
                const validationResults = rows.map((row) => {
                  const validationRes =
                    PersonCreateManyInputObjectSchema.safeParse({
                      ...row,
                      case: row.case ? row.case.toString() : null,
                      record_id: "mock",
                      record_date: "mock",
                      // author_id: "mock",
                    });

                  return {
                    success: validationRes.success,
                    data: validationRes.success
                      ? validationRes.data
                      : (row as Prisma.PersonCreateManyInput),
                    error: validationRes.success
                      ? undefined
                      : validationRes.error,
                  };
                });

                setInputContent(validationResults);
              }
            },
          });
        }
      }
    };
    reader.readAsText(file);
  };

  console.log("inputContent", inputContent);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg basis-1/2">
        <Input
          accept={`.${FileFormat.CSV}`}
          label="Оберіть CSV файл"
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <div style={{ height: 500 }}>
        <Table<TableItem>
          columns={[
            { headerName: "#", valueGetter: "node.rowIndex + 1", width: 70 },
            { field: "data.last_name", headerName: "Прізвище" },
            { field: "data.first_name", headerName: "Ім'я" },
            { field: "data.middle_name", headerName: "По батькові" },
            { field: "data.birth_date", headerName: "Дата народження" },
            { field: "data.birth_place", headerName: "Місце народження" },
            { field: "data.record_date", headerName: "Дата запису" },
            { field: "data.record_place", headerName: "Місце запису" },
            { field: "data.record_type", headerName: "Тип запису" },
            { field: "data.archive", headerName: "Архів" },
            { field: "data.fund", headerName: "Фонд" },
            { field: "data.description", headerName: "Опис" },
            { field: "data.case", headerName: "Справа" },
            { field: "data.page", headerName: "Сторінка" },
            {
              field: "data.note",
              headerName: "Примітки",
              cellStyle: {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                padding: 0,
              },
              width: 500,
            },
          ]}
          rows={inputContent}
          getRowStyle={(params: any) => {
            if (!params.data.success) {
              return { color: "red" };
            }
          }}
        />
      </div>
    </section>
  );
};

export default ImportPanel;
