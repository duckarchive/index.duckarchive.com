import { FileFormat, Mapper } from "@/types";

export const config = {
  format: FileFormat.JSON,
  title: "Учетная карточка",
};

export const parse: Mapper["parse"] = (content) => {
  return [];
};

