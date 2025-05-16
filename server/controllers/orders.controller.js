const { getAllOrdersSorted } = require("../db/orders.db");

const getOrdersSortedController = async (req, res) => {
  try {
    const orders = await getAllOrdersSorted();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error al obtener órdenes:", error);
    res.status(500).json({ error: "Error al obtener las órdenes" });
  }
};

module.exports = {
  getOrdersSortedController,
};
