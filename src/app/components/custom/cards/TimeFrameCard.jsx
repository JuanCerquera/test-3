import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import TimeframeSlot from "/src/app/components/custom/misc/TimeframeSlot";
import useItem from "/src/app/hooks/useItem";

export default function TimeFrameCard({ day, index }) {
  const service = useItem();
  const initialSlots = service
    ? service.timeframes.filter((slot) => slot.weekday == index)
    : [];

  const [slots, setSlots] = useState(initialSlots);
  const initialTimeIndex = slots.length > 0 ? slots.at(-1).id + 1 : 0;
  const [timeIndex, setTimeIndex] = useState(initialTimeIndex);
  function addTimeSlot() {
    const slot = {
      id: timeIndex,
      start_time: "07:00",
      end_time: "17:00",
      weekday: index,
    };

    setTimeIndex(timeIndex + 1);
    setSlots([...slots, slot]);
  }

  function deleteTimeSlot(id) {
    const newSlots = slots.filter((slot) => slot.id !== id);
    setSlots(newSlots);
  }

  return (
    <div className="flex gap-3 flex-col bg-white rounded-2xl p-3 border-slate-300 border">
      <h3 className="text-center font-semibold">{day}</h3>
      <Slots slots={slots} deleteTimeSlot={deleteTimeSlot} index={index} />
      <button onClick={addTimeSlot} className="m-auto" type="button">
        <IoMdAddCircle className="size-9 rounded-md text-primary-600" />
      </button>
    </div>
  );
}

function Slots({ slots, deleteTimeSlot, index }) {
  return (
    <div className="flex flex-col gap-2">
      {slots.map((slot) => (
        <TimeframeSlot
          timeIndex={slot.id}
          dayIndex={index}
          onDelete={() => deleteTimeSlot(slot.id)}
          key={slot.id}
        />
      ))}
    </div>
  );
}
