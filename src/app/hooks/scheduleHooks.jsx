import axiosInstance from "/src/app/utilities/axios";
import { fetchModelWithFilters } from "/src/app/utilities/fetchers";
import { useEffect } from "react";
import { useState } from "react";

export function useFetchLocations(serviceId) {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    if (serviceId) {

      fetchModelWithFilters("locations",{"service":serviceId}).then(
        (response) => {
          setLocations(response);
        },
      );
    }
  }, [serviceId, setLocations]);
  return locations;
}

export function useFetchProfessionals(serviceId, locationId) {
  const [professionals, setProfessionals] = useState([]);
  useEffect(() => {
    if (locationId) {
      fetchModelWithFilters("professionals", {
        location: locationId,
        services: serviceId,
      }).then((response) => {
        setProfessionals(response);
      });
    }
  }, [serviceId, locationId, setProfessionals]);

  return professionals;
}

export function useFetchAdditionalQuestions(serviceId) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetchModelWithFilters("additional_questions", {
      service: serviceId,
    }).then((response) => {
      setQuestions(response);
    });
  }, [setQuestions, serviceId]);

  return questions;
}

export function useFetchTimes(professionalId, serviceId, dateStr) {
  const [timeframes, setTimeframes] = useState([]);
  useEffect(() => {
    const url = `/get_available_times/${professionalId}/${serviceId}/${dateStr}`;
    axiosInstance({
      method: "get",
      url,
    }).then((response) => {
      setTimeframes(response.data);
    }).catch((error) => {
      setTimeframes([]);
    })
  }, [professionalId, dateStr, setTimeframes]);

  return timeframes;
}