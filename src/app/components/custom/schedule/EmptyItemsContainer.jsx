import { IoMdInformationCircleOutline } from "react-icons/io";
export default function EmptyItemsContainer({ children }) {
  return (
    <div className="flex gap-1 items-center">
      <IoMdInformationCircleOutline size={25} />
      <h2>{children}</h2>
    </div>
  );
}