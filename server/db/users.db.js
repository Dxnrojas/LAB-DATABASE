const supabaseCli = require("../services/supabase.service");

// Obtener solo username y email
const getUserBasicData = async () => {
  const { data, error } = await supabaseCli.from("users").select("username, email");
  if (error) {
    console.error("Error al obtener usuarios:", error);
    return error;
  }
  return data;
};

module.exports = {
  getUserBasicData,
};
