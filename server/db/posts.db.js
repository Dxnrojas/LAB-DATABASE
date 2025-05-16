const supabaseCli = require("../services/supabase.service");

// Buscar posts cuyo title contenga la palabra "tutorial"
const getPostsWithTutorial = async () => {
  const { data, error } = await supabaseCli
    .from("posts")
    .select("*")
    .ilike("title", "%tutorial%"); // Insensible a mayúsculas/minúsculas

  if (error) {
    console.error("Error al buscar posts:", error);
    return error;
  }

  return data;
};

module.exports = {
  getPostsWithTutorial,
};
