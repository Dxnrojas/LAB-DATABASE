const { getAllProducts, getFilteredElectronicsProducts, getPaginatedProducts, getProductsByUserId   } = require("../db/products.db");

const getProductsController = async (req, res) => {
  try {
    const products = await getAllProducts();
    if (products.code === 'PGRST116' || products.status === 400) {
      return res.status(400).json({ error: "Error al obtener productos" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
  }
};

const getProductsUnder50Controller = async (req, res) => {
  try {
    const allProducts = await getAllProducts();

    // Lógica sencilla en JS: filtrar precio menor a 50
    const filtered = allProducts.filter((product) => product.price < 50);

    res.status(200).json(filtered);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar productos" });
  }
};

const getFilteredElectronicsController = async (req, res) => {
  try {
    const products = await getFilteredElectronicsProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar productos Electronics" });
  }
};

const getPaginatedProductsController = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    const products = await getPaginatedProducts(limit, offset);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error en la paginación:", error);
    res.status(500).json({ error: "Error al paginar productos" });
  }
};

const getProductsByUserController = async (req, res) => {
  const userId = parseInt(req.params.userId);

  if (isNaN(userId)) {
    return res.status(400).json({ error: "ID de usuario inválido" });
  }

  try {
    const products = await getProductsByUserId(userId);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos del usuario" });
  }
};

module.exports = {
  getProductsController,
  getProductsUnder50Controller,
  getFilteredElectronicsController,
  getPaginatedProductsController,
  getProductsByUserController
};

