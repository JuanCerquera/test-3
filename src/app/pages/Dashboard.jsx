import { Chart } from "react-google-charts";
import useSetTitle from "/src/app/hooks/useSetTitle";
import ProfileCompletenessCard, {
  getProfileCompleteness,
} from "/src/app/components/custom/cards/ProfileCompletenessCard.jsx";
import ProfileNextStep from "/src/app/components/custom/cards/ProfileNextStep.jsx";
import { useContext } from "react";
import { ProfileContext } from "/src/app/utilities/contexts.jsx";
import { useLoaderData } from "react-router-dom";
import { fetchModelWithFilters } from "/src/app/utilities/fetchers.js";
import { withAuth } from "/src/app/utilities/wrappers.js";
import { toCurrency } from "/src/app/utilities/filters.js";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoCalendarNumber } from "react-icons/io5";
import { StatisticCard } from "/src/app/components/ui/DashboardComponents.jsx";
import { TbCalendarDollar, TbCalendarPlus, TbUserPlus } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

async function loader() {
  const start_time = new Date();
  const companyId = localStorage.getItem("user_id");
  const stats = await fetchModelWithFilters(`stats/${companyId}`);
  // transform the date strings into Date objects
  const transformDateStrings = (data) => {
    data.forEach((item, index) => {
      if (index > 0) item[0] = new Date(item[0]);
    });
  };

  transformDateStrings(stats.revenue_per_service_per_date);
  transformDateStrings(stats.appointments_per_service_per_date);
  transformDateStrings(stats.appointments_per_professional_per_date);
  return stats;
}

export const protectedLoader = withAuth(loader);

export default function Dashboard() {
  useSetTitle("Panel principal");
  const stats = useLoaderData();
  const colors = ["#6890a8", "#239ad4", "#4bb3e5", "#89cdf0", "#99b6c7"];
  const profile = useContext(ProfileContext);
  const completeness = getProfileCompleteness(profile);
  return (
    <div className="flex flex-col gap-5">
      {completeness < 100 && (
        <ProfileCompletenessCard
          profile={profile}
          completeness={completeness}
          className={""}
        />
      )}
      <ProfileNextStep profile={profile} className="m-0"/>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
        <StatisticCard
          Icon={TbCalendarDollar}
          title={"Ingresos este mes"}
          value={toCurrency(stats.revenue_this_month)}
        />
        <StatisticCard
          Icon={TbCalendarPlus}
          title={"Citas este mes:"}
          value={stats.appointments_this_month}
        />
        <StatisticCard
          Icon={TbUserPlus}
          title={"Nuevos clientes este mes:"}
          value={stats.new_customers_this_month}
        />

        <StatisticCard
          Icon={RiMoneyDollarCircleFill}
          title={"Ingresos totales:"}
          value={toCurrency(stats.total_revenue)}
        />

        <StatisticCard
          Icon={IoCalendarNumber}
          title={"Citas totales:"}
          value={stats.total_appointments}
        />

        <StatisticCard
          Icon={FaUser}
          title={"Clientes totales:"}
          value={stats.total_customers}
        />
      </div>
      <div className="flex flex-row flex-wrap gap-5">
        {stats.appointments_per_service_per_date.length > 1 && (
          <div className="bg-slate-50 rounded-xl shadow-md min-w-[60%] p-3 flex-grow border border-gray-200">

            <Chart
              chartLanguage="es"
              chartType="ColumnChart"
              width="100%"
              height="400px"
              data={stats.appointments_per_service_per_date}
              options={{
                backgroundColor: "transparent",
                title: "Servicios diarios por tipo",
                legend: {position: "top"},
                isStacked: true,
                hAxis: {
                  title: "Fecha",
                },
                vAxis: {
                  title: "Cantidad de servicios",
                },
                explorer: {
                  axis: "horizontal",
                  keepInBounds: true,
                  maxZoomIn: 4.0,
                  maxZoomOut: 1,
                },
                chartArea: {
                  width: "80%",
                  height: "80%",
                },
                colors: colors,
              }}
            />
          </div>
        )}
        {stats.appointments_per_service.length > 1 && (
          <div className="bg-slate-50 rounded-xl shadow-md w-[35%] p-3 flex-grow border border-gray-200">
            <Chart
              chartLanguage="es"
              chartType="PieChart"
              width="100%"
              height="400px"
              data={stats.appointments_per_service}
              options={{
                backgroundColor: "transparent",
                title: "Servicios por tipo",
                legend: {position: "bottom"},
                isStacked: true,
                hAxis: {
                  title: "Fecha",
                },
                vAxis: {
                  title: "Cantidad de servicios",
                },
                chartArea: {
                  width: "100%",
                  height: "80%",
                },
                colors: colors,
              }}
            />
          </div>
        )}
        {stats.revenue_per_service_per_date.length > 1 && (
          <div className="bg-slate-50 rounded-xl shadow-md p-3 w-full border border-gray-200">
            <Chart
              chartLanguage="es"
              chartType="LineChart"
              width="100%"
              height="400px"
              data={stats.revenue_per_service_per_date}
              options={{
                backgroundColor: "transparent",
                title: "Ingresos diarios por tipo de servicio",
                legend: {position: "top"},
                curveType: "function",
                hAxis: {
                  title: "Fecha",
                },
                vAxis: {
                  title: "Pesos",
                  viewWindow: {
                    min: 0,
                  },
                },
                explorer: {
                  axis: "horizontal",
                  keepInBounds: true,
                  maxZoomIn: 4.0,
                  maxZoomOut: 1,
                },
                chartArea: {
                  width: "80%",
                  height: "80%",
                },
                colors: colors,
              }}
            />
          </div>
        )}
        {stats.appointments_per_professional_per_date.length > 1 && (
          <div className="bg-slate-50 rounded-xl shadow-md p-3 w-full border border-gray-200">
            <Chart
              chartLanguage="es"
              chartType="ColumnChart"
              width="100%"
              height="400px"
              data={stats.appointments_per_professional_per_date}
              options={{
                backgroundColor: "transparent",
                title: "Citas por profesional",
                legend: {position: "top"},
                hAxis: {
                  title: "Fecha",
                },
                vAxis: {
                  title: "Pesos",
                },
                explorer: {
                  axis: "horizontal",
                  keepInBounds: true,
                  maxZoomIn: 4.0,
                  maxZoomOut: 1,
                },
                chartArea: {
                  width: "80%",
                  height: "80%",
                },
                colors: colors,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
