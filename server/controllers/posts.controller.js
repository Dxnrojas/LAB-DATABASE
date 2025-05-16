const { getPostsWithTutorial } = require("../db/posts.db");

const getTutorialPostsController = async (req, res) => {
  try {
    const posts = await getPostsWithTutorial();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error en el controlador:", error);
    res.status(500).json({ error: "Error al obtener posts con 'tutorial'" });
  }
};

module.exports = {
  getTutorialPostsController,
};
