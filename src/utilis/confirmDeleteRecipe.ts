import { useAlertStore } from "@/store/alertStore";

export const confirmDeleteRecipe = async (
  deleteFn: () => Promise<void>
) => {
  const confirmed = window.confirm("¿Estás seguro de que deseas eliminar esta receta?");
  if (!confirmed) return;

  try {
    await deleteFn();
    useAlertStore.getState().success("Receta eliminada exitosamente");
  } catch (err) {
    useAlertStore.getState().error("Ocurrió un error al eliminar la receta");
  }
};
