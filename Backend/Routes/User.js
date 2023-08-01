const express = require ('express'),
      router = express.Router(),
      UserController = require('../Controllers/userController');

router.post('/add', UserController.AddUser);
router.get('/allusers', UserController.ShowUsers);
router.put('/:id/update', UserController.UpdateUser);
router.delete('/delete/:id', UserController.DeleteUser);

module.exports = router;