import { Person } from "@prisma/client";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export enum FileFormat {
  CSV = "csv",
  JSON = "json",
}

export type Mapper = {
  title: string;
  format: FileFormat;
  parse: (data: string) => Person[];
};
