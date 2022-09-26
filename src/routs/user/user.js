const express = require('express');
const userController= require('../../controllers/users/userController')
const router = express.Router();


router.get('/list',userController.userList)
router.post("/",userController.createUser)
router.patch("/:id",userController.updateUser)
router.delete("/",userController.deleteUser)

module.exports = router;