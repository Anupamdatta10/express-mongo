const express = require('express');

const publicRouter = express.Router();
//const authRouter = express.Router();
const userRouter=require("./user/user")
const personalDetaiulsRouter=require("./user/usersPersonalDetails")
const userPersonalDetaiulsRelationRouter =require('./user/userPersonalDetaiulsRelationRouter')
publicRouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Session');
    res.header('Access-Control-Allow-Headers', 'Accesstoken');
    next();
});

publicRouter.use('/users', userRouter);
publicRouter.use('/usersPersonalDetails',personalDetaiulsRouter);
publicRouter.use('/usersPersonalDetailsRelation',userPersonalDetaiulsRelationRouter);

module.exports={publicRouter}

