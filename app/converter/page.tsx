import { NextPage } from "next";

import ConverterPanel from "@/containers/converter-panel";

const ConverterPage: NextPage = async () => {
  return (
    <div>
      <h1>Помічник</h1>
      <p>На цій сторінці можна підготувати ваші дані до імпорту в систему.</p>

      <ConverterPanel />
    </div>
  );
};

export default ConverterPage;
