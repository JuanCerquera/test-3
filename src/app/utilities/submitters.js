import { json, redirect } from "react-router-dom";
import axiosInstance from "./axios";

export async function submitForm({
  request = null,
  modelName,
  method,
  instanceId = null,
}) {
  const formData = request ? await request.formData() : null;
  let url = `/${modelName}/`;
  if (instanceId) {
    url += `${instanceId}/`;
  }

  const response = await executeAxios({ method, url, data: formData });
  return response;
}

export async function executeAxios(props) {
  let response;
  try {
    response = await axiosInstance(props);
  } catch (error) {
    response = error.response;
    console.log("Hubo un error");
  }
  console.log(response);
  return response;
}

export async function createInstance(props) {
  const response = await submitForm({ ...props, method: "post" });
  return response;
}

export async function editInstance(props) {
  const response = await submitForm({ ...props, method: "patch" });
  return response;
}

export async function deleteInstance(props) {
  const response = await submitForm({ ...props, method: "delete" });
  return response;
}

function getAdditionalQuestions(formData) {
  const additionalQuestions = [];
  for (const key of formData.keys()) {
    if (key.startsWith("additional-question-id-")) {
      const questionId = formData.get(key);
      const question = {
        text: formData.get(`additional-question-${questionId}-text`),
        // type: formData.get(`additional-question-${questionId}-type`),
        id: questionId,
      };
      additionalQuestions.push(question);
    }
  }
  return additionalQuestions;
}

function getTimeframes(formData) {
  const timeframes = [];
  for (const key of formData.keys()) {
    if (key.startsWith("timeframe-id-")) {
      const timeframeId = formData.get(key);
      const timeframe = {
        weekday: formData.get(`timeframe-${timeframeId}-day`),
        start_time: formData.get(`timeframe-${timeframeId}-start_time`),
        end_time: formData.get(`timeframe-${timeframeId}-end_time`),
        id: timeframeId,
      };
      timeframes.push(timeframe);
    }
  }
  return timeframes;
}

export async function processServiceForm(request) {
  const formData = await request.formData();
  const additionalQuestions = getAdditionalQuestions(formData);
  const timeframes = getTimeframes(formData);

  formData.append("additional_questions", JSON.stringify(additionalQuestions));
  formData.append("timeframes", JSON.stringify(timeframes));
  return formData;
}
