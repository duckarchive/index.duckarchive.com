"use client";

import { useEffect, useState } from "react";

export type ColumnKey =
  | "last_name"
  | "first_name"
  | "middle_name"
  | "father_name_normalized"
  | "is_male"
  | "birth_date"
  | "birth_place"
  | "record_date"
  | "record_place"
  | "record_type"
  | "resource_id"
  | "archive"
  | "fund"
  | "case"
  | "page"
  | "description"
  | "note"
  | "created_at";

const DEFAULT_COLUMNS: ColumnKey[] = [
  "last_name",
  "first_name",
  "birth_date",
  "birth_place",
];

const STORAGE_KEY = "duckarchive_person_search_columns";

export const useColumnStorage = () => {
  const [columns, setColumns] = useState<ColumnKey[]>(DEFAULT_COLUMNS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setColumns(parsed);
        }
      }
    } catch (error) {
      console.error("Error loading columns from localStorage:", error);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when columns change
  const updateColumns = (newColumns: ColumnKey[]) => {
    setColumns(newColumns);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newColumns));
    } catch (error) {
      console.error("Error saving columns to localStorage:", error);
    }
  };

  const resetToDefaults = () => {
    updateColumns(DEFAULT_COLUMNS);
  };

  return {
    columns,
    updateColumns,
    resetToDefaults,
    isLoaded,
  };
};
