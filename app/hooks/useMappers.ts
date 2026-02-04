import mapperFiles from "@/lib/mappers";
import { Mapper } from "@/types";

interface ResourceMappers {
  title: string;
  mappers: Mapper[];
}

const useMappers = (): ResourceMappers[] => {
  return Object.entries(mapperFiles).map(([title, mappers]) => ({
    title,
    mappers: Object.values(mappers).map((m) => ({
      ...m.config,
      parse: m.parse,
    })),
  }));
};

export default useMappers;
