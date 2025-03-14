"use client";

import { useState } from "react";
import { Select, SelectItem } from "@heroui/select";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import Papa from "papaparse";

import useMappers from "@/app/hooks/useMappers";
import { FileFormat } from "@/types";

type ParsedFileContent = Record<string, string>[];

const ConverterPanel: React.FC = () => {
  const resourcesWithMappers = useMappers();
  const [activeFileFormat, setActiveFileFormat] = useState<FileFormat>();
  const [activeResource, setActiveResource] = useState<string>();
  const [activeMapper, setActiveMapper] = useState<string>();
  const [inputFileContent, setInputFileContent] = useState<ParsedFileContent>(
    []
  );

  const handleFileFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveFileFormat(e.target.value as FileFormat);
  };

  const handleResourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveResource(e.target.value);
  };

  const handleMapperChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveMapper(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContent = event.target?.result;
      let parsedContent: ParsedFileContent = [];

      if (fileContent) {
        if (activeFileFormat === "csv") {
          Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
              parsedContent = results.data as ParsedFileContent;
            },
            error: (error) => {
              console.error("Error parsing CSV:", error);
            },
          });
        } else if (activeFileFormat === "json") {
          parsedContent = JSON.parse(fileContent as string);
        }

        setInputFileContent(parsedContent);
      }
    };
    reader.readAsText(file);
  };

  const activeResourceMappers =
    resourcesWithMappers.find((resource) => resource.title === activeResource)
      ?.mappers || [];

  console.log(inputFileContent);

  return (
    <section className="flex flex-col gap-4 h-[80vh]">
      <div aria-label="converter-panel" className="flex gap-4">
        <Select
          label="Оберіть формат файлу"
          value={activeFileFormat}
          onChange={handleFileFormatChange}
        >
          <SelectItem key="csv">CSV</SelectItem>
          <SelectItem key="json">JSON</SelectItem>
        </Select>
        <Select
          label="Оберіть ресурс"
          value={activeResource}
          onChange={handleResourceChange}
        >
          {resourcesWithMappers.map((resource) => (
            <SelectItem key={resource.title}>{resource.title}</SelectItem>
          ))}
        </Select>
        <Select
          label="Оберіть алгоритм"
          value={activeMapper}
          onChange={handleMapperChange}
        >
          {activeResourceMappers.map((Mapper) => (
            <SelectItem key={Mapper.title}>{Mapper.title}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex gap-4 grow">
        <div className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg basis-1/2">
          <Input
            accept={`.${activeFileFormat?.toLowerCase()}`}
            isDisabled={!activeFileFormat || !activeResource || !activeMapper}
            label="Оберіть файл"
            type="file"
            onChange={handleFileChange}
          />
          <Textarea
            isReadOnly
            className="grow basis-full"
            label="Ваші дані"
            placeholder="TODO: Implement file content preview + manual entering"
            value={
              inputFileContent.length > 0
                ? JSON.stringify(inputFileContent, null, 2).slice(0, 5000)
                : ""
            }
          />
        </div>
        <div className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg basis-1/2">
          <Button isDisabled size="lg">
            Завантажити результат
          </Button>
          <Textarea
            isReadOnly
            label="Результат"
            placeholder="Результат обробки файлу"
          />
        </div>
      </div>
    </section>
  );
};

export default ConverterPanel;
