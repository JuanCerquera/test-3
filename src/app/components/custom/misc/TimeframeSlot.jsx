import { FormErrorsContext } from "/src/app/utilities/contexts";
import { CgTrash } from "react-icons/cg";
import { useActionData } from "react-router-dom";
import FieldError from "/src/app/components/custom/form/FieldError";

export default function TimeframeSlot({ dayIndex, timeIndex, onDelete }) {
  const id = `${dayIndex}-${timeIndex}`;

  const errorDict = useActionData();
  const timeframeError = errorDict?.timeframes[id];
  const defaultErrorKey = "non_field_errors";

  return (
    <div>
      <div className="flex flex-row gap-3 items-center">
        <input type="hidden" name={`timeframe-id-${id}`} value={id} />
        <input type="hidden" name={`timeframe-${id}-day`} value={dayIndex} />
        <TimeBoundary id={id} type="start_time" />
        -
        <TimeBoundary id={id} type="end_time" />
        <button type="button" onClick={onDelete}>
          <CgTrash className="bg-red-700 size-9 p-1 rounded-md text-white" />
        </button>
      </div>
      <FormErrorsContext.Provider value={timeframeError}>
        <FieldError name={defaultErrorKey} />
      </FormErrorsContext.Provider>
    </div>
  );
}

function TimeBoundary({ id, type }) {
  const defaultValue = type == "start_time" ? "07:00:00" : "17:00:00";
  return (
    <input
      type="time"
      defaultValue={defaultValue}
      name={`timeframe-${id}-${type}`}
    />
  );
}
