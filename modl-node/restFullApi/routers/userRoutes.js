const {
  patchById,
  addUser,
  deleteUser,
  getUsers,
  getUserById,
} = require("../controllers/usersControlers");

const router = require("express").Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     description: Obtiene la collection completa de usuarios
 *     responses:
 *       200:
 *         description: Usuarios obtenidos correctamente
 *       500:
 *           description: Este end-point no funciona correctamente.
 */
router.get("/", getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     description: Obtiene un usuario específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a obtener.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario obtenido correctamente.
 *       404:
 *         description: Usuario no encontrado para el ID proporcionado.
 */
router.get("/:id", getUserById);

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update user
 *     description: Update user with body is not required and params is required.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID user to update.
 *         schema:
 *           type: string
 *         example: '6579995676738e6e17b9fef1'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *             example:
 *               name: Nombre del usuario
 *               email: usuario@example.com
 *     responses:
 *       201:
 *         description: Success - User update.
 *       400:
 *         description: Error request, verify sended data.
 */
router.patch("/:id", patchById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Crea un nuevo usuario con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *             example:
 *               name: Nombre del usuario
 *               email: usuario@example.com
 *     responses:
 *       201:
 *         description: Usuario creado correctamente.
 *       400:
 *         description: Error en la solicitud, verifique los datos enviados.
 */
router.post("/", addUser);
router.delete("/:id", deleteUser);

module.exports = router;
