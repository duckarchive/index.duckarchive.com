import { NextPage } from "next";
import { Link } from "@heroui/link";

import ImportPanel from "@/containers/import-panel";

const ImportPage: NextPage = async () => {
  return (
    <>
      <h1 className="text-xl">Імпорт вашого індексу</h1>
      <p className="mb-6 p-2 bg-warning-100 text-sm rounded">
        Будь ласка ознайомтесь з&nbsp;
        <Link className="text-sm" href="/docs/import">
          інструкцією та вимогами
        </Link>
        &nbsp;перед завантаженням.
      </p>

      <ImportPanel />
    </>
  );
};

export default ImportPage;
