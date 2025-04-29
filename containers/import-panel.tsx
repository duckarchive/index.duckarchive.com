"use client";

import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { Input } from "@heroui/input";
import Papa from "papaparse";
import { useTheme } from "next-themes";
import { colorSchemeDark, themeQuartz } from "ag-grid-community";

import { FileFormat, InputFileContent, PersonToSave } from "@/types";
import { PersonCreateManyInputObjectSchema } from "@/prisma/generated/schemas";

const ImportPanel: React.FC = () => {
  const { theme } = useTheme();
  const coloredTheme =
    theme === "dark" ? themeQuartz.withPart(colorSchemeDark) : themeQuartz;
  const myTheme = coloredTheme.withParams({
    spacing: 4,
  });
  const [inputContent, setInputContent] = useState<InputFileContent>([]);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  useEffect(() => {
    if (inputContent.length > 0) {
      const errors: string[] = [];

      inputContent.forEach((row) => {
        PersonCreateManyInputObjectSchema.parseAsync({
          ...row,
          case: row.case ? row.case.toString() : null,
          record_id: "mock",
          record_date: "mock",
          author_id: "mock",
        }).catch((error) => {
          console.error(error);
        });
      });

      setValidationErrors(errors);
    }
  }, [inputContent]);

  console.log("Validation Errors:", validationErrors);

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
            complete: (results) => {
              setInputContent(results.data as InputFileContent);
            },
          });
        }
      }
    };
    reader.readAsText(file);
  };

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
        <AgGridReact<PersonToSave>
          columnDefs={[
            { headerName: "#", valueGetter: "node.rowIndex + 1", width: 70 },
            { field: "last_name", headerName: "Прізвище" },
            { field: "first_name", headerName: "Ім'я" },
            { field: "middle_name", headerName: "По батькові" },
            { field: "birth_date", headerName: "Дата народження" },
            { field: "birth_place", headerName: "Місце народження" },
            { field: "record_date", headerName: "Дата запису" },
            { field: "record_place", headerName: "Місце запису" },
            { field: "record_type", headerName: "Тип запису" },
            { field: "archive", headerName: "Архів" },
            { field: "fund", headerName: "Фонд" },
            { field: "description", headerName: "Опис" },
            { field: "case", headerName: "Справа" },
            { field: "page", headerName: "Сторінка" },
            {
              field: "note",
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
          rowData={inputContent as any}
          theme={myTheme}
        />
      </div>
    </section>
  );
};

export default ImportPanel;
