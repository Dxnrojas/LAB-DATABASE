const { getUserBasicData } = require("../db/users.db");

const getUsersBasicController = async (req, res) => {
  try {
    const users = await getUserBasicData();
    if (!users || users.length === 0) {
      return res.status(404).json({ error: "No se encontraron usuarios" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

module.exports = {
  getUsersBasicController,
};
