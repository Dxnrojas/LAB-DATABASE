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

module.exports = {
  getAllProducts,
  getFilteredElectronicsProducts,
};
