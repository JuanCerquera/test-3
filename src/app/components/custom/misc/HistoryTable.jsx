import { useEffect, useMemo, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import axiosInstance from "/src/app/utilities/axios.js";

export default function HistoryTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);

  let perPageRef = useRef(10);
  let filterTextRef = useRef("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  async function fetchData(page = 1) {
    console.log("new per page value", perPageRef.current);
    setLoading(true);
    const url = `/appointments?search=${filterTextRef.current}&page=${page}&page_size=${perPageRef.current}`;
    console.log(url);
    const response = await axiosInstance({
      method: "get",
      url: url,
    });
    setData(response.data.results);
    setTotalRows(response.data.count);
    setLoading(false);
  }
  function noDataComponent() {
    return (
      <div className="my-5">
        No hay citas
      </div>
    );
  }
  function progressComponent() {
    return (
      <div className="my-5">
        Cargando...
      </div>
    );
  }

  function filterItems(filterValue) {
    filterTextRef.current = filterValue;
    console.log(filterValue);
    fetchData();
  }

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <input
        id="search"
        type="text"
        placeholder="Buscar"
        aria-label="Search Input"
        onChange={(e) => filterItems(e.target.value)}
      />
    );
  }, [filterTextRef, resetPaginationToggle]);

  async function handlePerRowsChange(newPerPage, page) {
    console.log(newPerPage);
    perPageRef.current = newPerPage;
    fetchData(page);
  }
  async function handlePageChange(page) {
    fetchData(page);
  }

  useEffect(() => {
    fetchData(); // fetch page 1 of users
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      sortableField: "id",
      width: "70px"
    },
    {
      name: "Fecha",
      selector: (row) => new Date(row.start).toLocaleString(),
      sortable: true,
      sortableField: "date",
      width: "220px"
    },
    {
      name: "Cliente",
      selector: (row) => row.customer_name,
      sortable: true,
      sortableField: "customer__first_name",
      width: "180px"
    },
    {
      name: "Servicio",
      selector: (row) => row.service_name,
      sortable: true,
      sortableField: "service__name",
    },
    {
      name: "Sede",
      selector: (row) => row.location_name,
      sortable: true,
      sortableField: "location__name",
    },
    {
      name: "Profesional",
      selector: (row) => row.professional_name,
      sortable: true,
      sortableField: "professional__name",
    },
  ];
  return (
    <div
      className="shadow-md bg-transparent rounded-2xl"
      id="history-table"
    >
    <DataTable
      //title="Citas agendadas"
      columns={columns}
      data={data}
      pagination
      paginationServer
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      striped
      highlightOnHover
      noDataComponent={noDataComponent()}
      progressPending={loading}
      progressComponent={progressComponent()}
      //paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
      manualColumnResize
      customStyles={{
        headCells: {
          style: {
            fontSize: "1rem",
            fontWeight: "600",
          },
        },
        rows: {
          style: {
            fontSize: "1rem",
          },
        },
      }}
    />
    </div>

  );
}
