"use client";

import { useEffect, useState } from "react";
import { Select, SelectItem } from "@heroui/select";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import Papa from "papaparse";
import { AgGridReact } from "ag-grid-react";

import { FileFormat, InputFileContent, PersonToSave } from "@/types";

const ImportPanel: React.FC = () => {
  const [inputContent, setInputContent] = useState<InputFileContent>([]);

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
        if (fileFormat === "csv") {
          Papa.parse(file, {
            header: true,
            dynamicTyping: true,
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
              cellStyle: { "white-space": "normal", lineHeight: "1" },
              autoHeight: true,
              width: 200,
            },
          ]}
          rowData={inputContent as any}
        />
      </div>
    </section>
  );
};

export default ImportPanel;
