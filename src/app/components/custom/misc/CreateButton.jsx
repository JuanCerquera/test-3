import { Link } from "react-router-dom";

export default function CreateButton({ Icon, text, to }) {
  return (
    <Link
      className="flex flex-col items-center justify-center border-2
    border-dashed rounded-xl border-gray-400 h-full min-h-96
    hover:border-gray-600 w-full mx-auto max-w-4xl cursor-pointer"
      to={to}
    >
      <Icon className="text-6xl text-gray-400" />
      <span className="font-semibold text-xl text-gray-400">{text}</span>
    </Link>
  );
}
