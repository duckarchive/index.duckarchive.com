"use client";

import { useState } from "react";
import { Select, SelectItem } from "@heroui/select";

import useMappers from "@/app/hooks/useMappers";
import { FileFormat } from "@/types";

const ConverterPanel: React.FC = () => {
  const resourcesWithMappers = useMappers();
  const [activeFileFormat, setActiveFileFormat] = useState<FileFormat>();
  const [activeResource, setActiveResource] = useState<string>();
  const [activeMapper, setActiveMapper] = useState<string>();

  const handleFileFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveFileFormat(e.target.value as FileFormat);
  };

  const handleResourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveResource(e.target.value);
  };

  const handleMapperChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveMapper(e.target.value);
  };

  const activeResourceMappers =
    resourcesWithMappers.find((resource) => resource.title === activeResource)
      ?.mappers || [];

  return (
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
  );
};

export default ConverterPanel;
