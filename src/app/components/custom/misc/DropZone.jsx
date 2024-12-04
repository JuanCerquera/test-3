import { useState, useRef } from "react";
import { MdFileUpload } from "react-icons/md";

export default function DropZone({ onImageDrop, onBoxClick }) {
  const messages = {
    empty: "Arrastra tu archivo aquí",
    over: "Suelta tu archivo",
  };

  const [message, setMessage] = useState(messages.empty);
  const dropRef = useRef();

  function handleDragOver(event) {
    setMessage(messages.over);
    dropRef.current.classList.add("bg-slate-300", "text-slate-600");
    return event.preventDefault();
  }

  function handleDragLeave() {
    setMessage(messages.empty);
    dropRef.current.classList.remove("bg-slate-300", "text-slate-600");
  }
  return (
    <div
      ref={dropRef}
      className="m-2 rounded-lg outline-dashed outline-4 outline-slate-300 flex flex-col items-center justify-center h-60 hover:bg-slate-200 cursor-pointer text-slate-400"
      onDrop={onImageDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={onBoxClick}
    >
      <MdFileUpload size={70} />
      <h2>{message}</h2>
    </div>
  );
}