const supabaseCli = require("../services/supabase.service");

// Obtener todos los productos
const getAllProducts = async () => {
  const { data, error } = await supabaseCli.from("products").select();
  if (error) {
    console.error("Error al obtener productos:", error);
    return error;
  }
  return data;
};

const getFilteredElectronicsProducts = async () => {
  const { data, error } = await supabaseCli
    .from("products")
    .select("*")
    .gt("price", 30)
    .eq("categorie", "Electronics");

  if (error) {
    console.error("Error al filtrar productos Electronics:", error);
    return error;
  }

  return data;
};

const getPaginatedProducts = async (limit = 10, offset = 0) => {
  const { data, error } = await supabaseCli
    .from("products")
    .select("*")
    .range(offset, offset + limit - 1); // Supabase usa rango de índices

  if (error) {
    console.error("Error al paginar productos:", error);
    return error;
  }

  return data;
};

module.exports = {
  getAllProducts,
  getFilteredElectronicsProducts,
  getPaginatedProducts,
};
