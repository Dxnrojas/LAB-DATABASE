const supabaseCli = require("../services/supabase.service");

// Traer todas las órdenes ordenadas por created_at descendente
const getAllOrdersSorted = async () => {
  const { data, error } = await supabaseCli
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error al obtener órdenes:", error);
    return error;
  }

  return data;
};

module.exports = {
  getAllOrdersSorted,
};
