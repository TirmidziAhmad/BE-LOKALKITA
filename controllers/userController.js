async function getUsers(req, res) {
  const users = await prisma.user.findMany();
  res.json(users);
}

async function getUserById(req, res) {
  const { userId } = req.params;
  const user = await prisma.user.findUnique({ where: { id: userId } });
  res.json(user);
}

async function createUser(req, res) {
  const { userName, email, password } = req.body;
  const user = await prisma.user.create({ data: { userName, email, password } });
  res.json(user);
}

async function updateUser(req, res) {
  const { userId } = req.params;
  const { userName, email, password } = req.body;
  const user = await prisma.user.update({ where: { id: userId }, data: { userName, email, password } });
  res.json(user);
}

async function deleteUser(req, res) {
  const { userId } = req.params;
  const user = await prisma.user.delete({ where: { id: userId } });
  res.json(user);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
