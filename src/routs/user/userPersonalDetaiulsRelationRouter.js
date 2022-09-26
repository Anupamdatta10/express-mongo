const express = require('express');
const router = express.Router();
const userPersonalDetaiulsRelationController=require('../../controllers/users/userPersonalDetailsRelation');

router.get('/list',userPersonalDetaiulsRelationController.UsersPersonalDetailsRelationlist)
router.post("/",userPersonalDetaiulsRelationController.createUsersPersonalDetailsRelation)
//router.patch("/:id",userController.updateUser)
//router.delete("/",userController.deleteUser)

module.exports = router;