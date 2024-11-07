async function getProducts(req, res) {
  const products = await prisma.product.findMany();
  res.json(products);
}
async function createProduct(req, res) {
  const { name, price, description, image } = req.body;
  const product = await prisma.product.create({ data: { name, price, description, image } });
  res.json(product);
}

async function updateProduct(req, res) {
  const { productId } = req.params;
  const { name, price, description, image } = req.body;
  const product = await prisma.product.update({ where: { id: productId }, data: { name, price, description, image } });
  res.json(product);
}

async function deleteProduct(req, res) {
  const { productId } = req.params;
  const product = await prisma.product.delete({ where: { id: productId } });
  res.json(product);
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
