export const s = (data: any): string => {
  if (data === null) {
    return "null";
  }
  if (typeof data === "undefined") {
    return "undefined";
  }
  if (typeof data === "string") {
    return data;
  }
  if (typeof data === "number" || typeof data === "boolean") {
    return data.toString();
  }
  if (data instanceof Date) {
    return `"${data.toISOString()}"`;
  }
  if (Array.isArray(data)) {
    return `${data
      .filter(Boolean)
      .map((item) => s(item))
      .filter((el) => el !== "null")
      .join(", ")}`;
  }
  if (typeof data === "object") {
    const entries = Object.entries(data)
      .map(([key, value]) => {
        const result = s(value);

        return result === "null" || !result ? "" : `${key}: ${result}`;
      })
      .filter(Boolean);

    return `${entries.join(";\n")}`;
  }

  return "null";
};
