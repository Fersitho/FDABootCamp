const { getUsers, getUserById, postUser, updateById, delUserById } = require('../controllers/usersControlers');

const router = require('express').Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/:id', updateById);
router.post('/', postUser);
router.delete('/', delUserById);

module.exports = router;