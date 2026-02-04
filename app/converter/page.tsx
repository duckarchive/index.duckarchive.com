import { NextPage } from "next";

import ConverterPanel from "@/containers/converter-panel";

const ConverterPage: NextPage = async () => {
  return (
    <>
      <h1 className="text-xl">Помічник</h1>
      <p className="mb-6">На цій сторінці можна підготувати ваші дані до імпорту в систему.</p>

      <ConverterPanel />
    </>
  );
};

export default ConverterPage;
