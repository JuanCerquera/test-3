import useSetTitle from "/src/app/hooks/useSetTitle";
import { fetchModel } from "/src/app/utilities/fetchers.js";
import { useLoaderData } from "react-router-dom";
import HistoryTable from "/src/app/components/custom/misc/HistoryTable.jsx";
import { withAuth } from "/src/app/utilities/wrappers";

async function loader() {
  const companyId = localStorage.getItem("user_id");
  const appointments = await fetchModel("appointments", companyId);
  return { appointments };
}

export const protectedLoader = withAuth(loader);

export default function History() {
  const { appointments } = useLoaderData();
  useSetTitle("Historial");
  return (
      <HistoryTable/>
  );
}
