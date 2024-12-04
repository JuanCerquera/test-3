import axiosInstance from "/src/app/utilities/axios";
import ItemCard from "./ItemCard";
import { deleteInstance } from "/src/app/utilities/submitters.js";
import { seekRoute } from "/src/routes/config.js";
import { ItemContext } from "/src/app/utilities/contexts";
import { useNavigate } from "react-router-dom";

export default function ProfessionalCard({ professional }) {
  const navigate = useNavigate();
  async function deleteProfessional(professionalId) {
    await deleteInstance({
      modelName: "professionals",
      instanceId: professionalId,
    });
    navigate(seekRoute("settings"), {
      state: { success: true, message: "Profesional eliminado exitosamente" },
    });
  }

  const contextValue = {
    item: professional,
    modelName: "professional",
    detailProperties: [professional.description],
    editRoute: "editProfessional",
    messageAfterDeletion: "Profesional eliminado exitosamente",
  };

  return (
    <ItemContext.Provider value={contextValue}>
      <ItemCard />
    </ItemContext.Provider>
  );
}
