import { ColDef } from "ag-grid-community";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { useTheme } from "next-themes";
import { colorSchemeDark, themeQuartz } from "ag-grid-community";

interface TableProps<T> extends AgGridReactProps<T> {
  columns: ColDef<T>[];
  rows: T[];
  isLoading?: boolean;
}

const Table = <T extends {}>({
  columns,
  rows,
  isLoading,
  ...agGridProps
}: TableProps<T>) => {
  const { theme } = useTheme();
  const coloredTheme =
    theme === "dark" ? themeQuartz.withPart(colorSchemeDark) : themeQuartz;
  const myTheme = coloredTheme.withParams({
    spacing: 4,
  });

  return (
    <AgGridReact<T>
      columnDefs={columns}
      loading={isLoading}
      rowData={rows}
      theme={myTheme}
      {...agGridProps}
    />
  );
};

export default Table;
