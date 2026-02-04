"use client";

import { useEffect, useState } from "react";
import { useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import { DuckTable, DuckTableSkeleton } from "@duckarchive/framework";
import { ColDef } from "ag-grid-community";

import { SearchPanel, SearchFilters } from "@/containers/search-panel";
import { ColumnSelectorModal } from "@/containers/column-selector-modal";
import { useColumnStorage, ColumnKey } from "@/lib/useColumnStorage";
import { Person } from "@/generated/prisma/client/client";

const COLUMN_LABELS: Record<ColumnKey, string> = {
  last_name: "Прізвище",
  first_name: "Ім'я",
  middle_name: "По батькові",
  father_name_normalized: "По батькові (норм.)",
  is_male: "Стать",
  birth_date: "Дата народження",
  birth_place: "Місце народження",
  record_date: "Дата запису",
  record_place: "Місце запису",
  record_type: "Тип запису",
  resource_id: "Ресурс",
  archive: "Архів",
  fund: "Фонд",
  case: "Справа",
  page: "Сторінка",
  description: "Опис",
  note: "Примітка",
  created_at: "Створено",
};

export default function SearchPage() {
  const { columns, updateColumns, isLoaded } = useColumnStorage();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [persons, setPersons] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(50);
  const [currentFilters, setCurrentFilters] = useState<SearchFilters>({});
  const [activeFilterId, setActiveFilterId] = useState<string | undefined>();

  const handleSearch = async (filters: SearchFilters) => {
    setCurrentFilters(filters);
    setOffset(0);
    await fetchPersons(filters, 0);
  };

  const fetchPersons = async (filters: SearchFilters, searchOffset: number) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();

      if (filters.lastName) params.append("lastName", filters.lastName);
      if (filters.firstName) params.append("firstName", filters.firstName);
      if (filters.patronymic) params.append("patronymic", filters.patronymic);
      if (filters.gender) params.append("gender", filters.gender);
      if (filters.birthYearMin)
        params.append("birthYearMin", filters.birthYearMin);
      if (filters.birthYearMax)
        params.append("birthYearMax", filters.birthYearMax);
      if (filters.deathYearMin)
        params.append("deathYearMin", filters.deathYearMin);
      if (filters.deathYearMax)
        params.append("deathYearMax", filters.deathYearMax);
      if (filters.recordType) params.append("recordType", filters.recordType);
      if (filters.resourceType)
        params.append("resourceType", filters.resourceType);

      params.append("limit", limit.toString());
      params.append("offset", searchOffset.toString());

      const response = await fetch(`/api/persons?${params.toString()}`);
      const data: Person[] = await response.json();

      setPersons(data);
      setOffset(searchOffset);
    } catch (error) {
      console.error("Error fetching persons:", error);
      setPersons([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextPage = () => {
    const newOffset = offset + limit;
    fetchPersons(currentFilters, newOffset);
  };

  const handlePrevPage = () => {
    const newOffset = Math.max(0, offset - limit);
    fetchPersons(currentFilters, newOffset);
  };

  const buildColumnDefs = (): ColDef<Person>[] => {
    return columns.map((colKey) => ({
      field: colKey as keyof Person,
      headerName: COLUMN_LABELS[colKey],
      filter: "agTextColumnFilter",
      floatingFilter: true,
      resizable: true,
      width: 150,
      valueFormatter: (params) => {
        const value = params.value;
        if (colKey === "is_male") {
          return value === true ? "М" : value === false ? "Ж" : "-";
        }
        if (
          colKey === "birth_date" ||
          colKey === "record_date" ||
          colKey === "created_at"
        ) {
          if (value instanceof Date) {
            return value.toLocaleDateString("uk-UA");
          }
          if (typeof value === "string") {
            return new Date(value).toLocaleDateString("uk-UA");
          }
        }
        return value ? String(value) : "";
      },
    }));
  };

  if (!isLoaded) {
    return <DuckTableSkeleton withFilters />;
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Пошук осіб</h1>

      <SearchPanel
        onSearch={handleSearch}
        onColumnsOpen={onOpen}
        selectedColumnsCount={columns.length}
      />

      <div className="h-96">
        {isLoading ? (
          <DuckTableSkeleton />
        ) : (
          <>
            <DuckTable<Person>
              columns={buildColumnDefs()}
              rows={persons}
              appTheme="dark"
              activeFilterId={activeFilterId}
              setActiveFilterId={setActiveFilterId}
            />

            {persons.length > 0 && (
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Результатів на сторінці: {persons.length}
                </div>
                <div className="flex gap-2">
                  <Button
                    isDisabled={offset === 0}
                    onPress={handlePrevPage}
                    variant="bordered"
                  >
                    ← Попередня
                  </Button>
                  <div className="flex items-center px-4 text-sm">
                    Сторінка {Math.floor(offset / limit) + 1}
                  </div>
                  <Button
                    isDisabled={persons.length < limit}
                    onPress={handleNextPage}
                    variant="bordered"
                  >
                    Наступна →
                  </Button>
                </div>
              </div>
            )}

            {persons.length === 0 && !isLoading && (
              <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                Не знайдено результатів. Спробуйте змінити фільтри.
              </div>
            )}
          </>
        )}
      </div>

      <ColumnSelectorModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        selectedColumns={columns}
        onColumnsChange={updateColumns}
      />
    </div>
  );
}
