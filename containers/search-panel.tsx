"use client";

import { useState } from "react";
import { Select, SelectItem } from "@heroui/select";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";

import { ColumnSelectorModal } from "./column-selector-modal";
import { ColumnKey } from "@/lib/useColumnStorage";

interface SearchPanelProps {
  onSearch: (filters: SearchFilters) => void;
  onColumnsOpen: () => void;
  selectedColumnsCount: number;
}

export interface SearchFilters {
  lastName?: string;
  firstName?: string;
  patronymic?: string;
  gender?: string;
  birthYearMin?: string;
  birthYearMax?: string;
  deathYearMin?: string;
  deathYearMax?: string;
  recordType?: string;
  resourceType?: string;
}

const GENDERS = [
  { key: "", label: "Будь-яка" },
  { key: "male", label: "Чоловіча" },
  { key: "female", label: "Жіноча" },
];

export const SearchPanel: React.FC<SearchPanelProps> = ({
  onSearch,
  onColumnsOpen,
  selectedColumnsCount,
}) => {
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters({});
    onSearch({});
  };

  const handleInputChange = (key: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value || undefined,
    }));
  };

  return (
    <div className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
      <h2 className="text-lg font-semibold">Фільтр пошуку</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Input
          label="Прізвище"
          placeholder="Прізвище"
          value={filters.lastName || ""}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
        <Input
          label="Ім'я"
          placeholder="Ім'я"
          value={filters.firstName || ""}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
        <Input
          label="По батькові"
          placeholder="По батькові"
          value={filters.patronymic || ""}
          onChange={(e) => handleInputChange("patronymic", e.target.value)}
        />

        <Select
          label="Стать"
          selectedKeys={filters.gender ? [filters.gender] : []}
          onChange={(e) => handleInputChange("gender", e.target.value)}
        >
          {GENDERS.map((gender) => (
            <SelectItem key={gender.key}>{gender.label}</SelectItem>
          ))}
        </Select>

        <Input
          label="Рік народження (від)"
          placeholder="YYYY"
          type="number"
          value={filters.birthYearMin || ""}
          onChange={(e) => handleInputChange("birthYearMin", e.target.value)}
        />
        <Input
          label="Рік народження (до)"
          placeholder="YYYY"
          type="number"
          value={filters.birthYearMax || ""}
          onChange={(e) => handleInputChange("birthYearMax", e.target.value)}
        />

        <Input
          label="Рік смерті (від)"
          placeholder="YYYY"
          type="number"
          value={filters.deathYearMin || ""}
          onChange={(e) => handleInputChange("deathYearMin", e.target.value)}
        />
        <Input
          label="Рік смерті (до)"
          placeholder="YYYY"
          type="number"
          value={filters.deathYearMax || ""}
          onChange={(e) => handleInputChange("deathYearMax", e.target.value)}
        />

        <Input
          label="Тип запису"
          placeholder="Тип запису"
          value={filters.recordType || ""}
          onChange={(e) => handleInputChange("recordType", e.target.value)}
        />
        <Input
          label="Ресурс"
          placeholder="ID ресурсу"
          value={filters.resourceType || ""}
          onChange={(e) => handleInputChange("resourceType", e.target.value)}
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button color="primary" onPress={handleSearch}>
          Пошук
        </Button>
        <Button variant="bordered" onPress={handleReset}>
          Скинути
        </Button>
        <Button variant="bordered" onPress={onColumnsOpen}>
          Налаштування стовпців ({selectedColumnsCount})
        </Button>
      </div>
    </div>
  );
};
