const { patchById, addUser, deleteUser, getUsers, getUserById } = require('../controllers/usersControlers');


const router = require('express').Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/:id', patchById);
router.post('/', addUser);
router.delete('/:id', deleteUser);

module.exports = router;