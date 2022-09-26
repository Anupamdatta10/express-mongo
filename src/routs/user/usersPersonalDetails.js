const express = require('express');
const personalDetaiulsController= require('../../controllers/users/usersPersonalDetailsController')
const router = express.Router();


router.get('/list',personalDetaiulsController.UsersPersonalDetailslist)
router.post("/",personalDetaiulsController.createUsersPersonalDetails)
//router.patch("/:id",userController.updateUser)
//router.delete("/",userController.deleteUser)

module.exports = router;