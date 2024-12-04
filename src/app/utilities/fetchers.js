import axiosInstance from "./axios.js";

export async function fetchModel(modelName, companyId) {
  const url = `/${modelName}/?company=${companyId}`;
  try {
    const response = await axiosInstance({
      method: "get",
      url: url,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error");
    return null;
  }
}

export async function fetchModelWithFilters(modelName, filters) {
  let url = `/${modelName}/`;
  if (filters) {
    url += "?";
    for (const key in filters) {
      url += `${key}=${filters[key]}&`;
    }
  }
  try {
    const response = await axiosInstance({
      method: "get",
      url: url,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error");
    throw error;
  }
}

export async function fetchModelList(modelName, companyId) {
  const modelList = await fetchModel(modelName, companyId);
  return modelList ?? [];
}

export async function fetchAppointments(info, success) {
  const start = info.startStr;
  const end = info.endStr;
  const companyId = localStorage.getItem("user_id");
  const response = await axiosInstance({
    method: "get",
    url: `/appointments/`,
    params: {
      date_gt: start,
      date_lt: end,
      company: companyId,
      get_all: true,
    },
  });
  success(response.data);
}
