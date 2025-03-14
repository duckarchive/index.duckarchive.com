import { Person } from "@prisma/client";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export enum FileFormat {
  CSV = "csv",
  JSON = "json",
}

export type ParsedFileContent = Record<string, any>[];

export type PersonToSave = Omit<
  Person,
  | "id"
  | "created_at"
  | "updated_at"
  | "record_id"
  | "first_name_normalized"
  | "last_name_normalized"
  | "father_name_normalized"
  | "is_male"
  | "is_birth_date_approx"
  | "birth_date_normalized"
  | "birth_place_lat"
  | "birth_place_lon"
  | "is_record_date_approx"
  | "record_place_lat"
  | "record_place_lon"
  | "record_type_normalized"
>;

export type Mapper = {
  title: string;
  format: FileFormat;
  parse: (content: ParsedFileContent) => PersonToSave[];
};
