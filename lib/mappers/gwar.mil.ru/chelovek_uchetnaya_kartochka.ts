import { Person } from "@prisma/client";

import { FileFormat } from "@/types";

export const config = {
  format: FileFormat.JSON,
  title: "Учетная карточка",
};

export const parse = (data: string): Person[] => {
  return [];
};

