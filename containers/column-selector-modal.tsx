"use client";

import { useCallback, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { ColumnKey } from "@/lib/useColumnStorage";

const ALL_COLUMNS: { key: ColumnKey; label: string }[] = [
  { key: "last_name", label: "Прізвище" },
  { key: "first_name", label: "Ім'я" },
  { key: "middle_name", label: "По батькові" },
  { key: "father_name_normalized", label: "По батькові (нормалізовано)" },
  { key: "is_male", label: "Стать" },
  { key: "birth_date", label: "Дата народження" },
  { key: "birth_place", label: "Місце народження" },
  { key: "record_date", label: "Дата запису" },
  { key: "record_place", label: "Місце запису" },
  { key: "record_type", label: "Тип запису" },
  { key: "resource_id", label: "Ресурс" },
  { key: "archive", label: "Архів" },
  { key: "fund", label: "Фонд" },
  { key: "case", label: "Справа" },
  { key: "page", label: "Сторінка" },
  { key: "description", label: "Опис" },
  { key: "note", label: "Примітка" },
  { key: "created_at", label: "Створено" },
];

interface ColumnSelectorModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedColumns: ColumnKey[];
  onColumnsChange: (columns: ColumnKey[]) => void;
}

export const ColumnSelectorModal: React.FC<ColumnSelectorModalProps> = ({
  isOpen,
  onOpenChange,
  selectedColumns,
  onColumnsChange,
}) => {
  const [tempColumns, setTempColumns] = useState<ColumnKey[]>(selectedColumns);

  const handleColumnToggle = useCallback((column: ColumnKey) => {
    setTempColumns((prev) =>
      prev.includes(column)
        ? prev.filter((col) => col !== column)
        : [...prev, column],
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    setTempColumns(ALL_COLUMNS.map((col) => col.key));
  }, []);

  const handleDeselectAll = useCallback(() => {
    setTempColumns([]);
  }, []);

  const handleApply = useCallback(() => {
    if (tempColumns.length === 0) {
      return;
    }
    onColumnsChange(tempColumns);
    onOpenChange(false);
  }, [tempColumns, onColumnsChange, onOpenChange]);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTempColumns(selectedColumns);
    }
    onOpenChange(open);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={handleOpenChange} size="lg">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Налаштування стовпців
            </ModalHeader>
            <ModalBody>
              <div className="flex gap-2 mb-4">
                <Button size="sm" variant="bordered" onPress={handleSelectAll}>
                  Вибрати все
                </Button>
                <Button
                  size="sm"
                  variant="bordered"
                  onPress={handleDeselectAll}
                >
                  Скасувати вибір
                </Button>
              </div>
              <div className="flex flex-col gap-3">
                {ALL_COLUMNS.map((col) => (
                  <Checkbox
                    key={col.key}
                    isSelected={tempColumns.includes(col.key)}
                    onChange={() => handleColumnToggle(col.key)}
                  >
                    {col.label}
                  </Checkbox>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="default" onPress={onClose}>
                Скасувати
              </Button>
              <Button
                color="primary"
                onPress={handleApply}
                isDisabled={tempColumns.length === 0}
              >
                Застосувати
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
