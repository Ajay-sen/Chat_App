const express=require("express");
const UserModel=require("../modals/userModel");
const expressAsyncHandler=require("express-async-handler");
const generateToken = require("../Config/generateToken");

const loginController=expressAsyncHandler(async(req,res)=>{
    console.log(req.body);
    const {name,password}=req.body;

    const user=await UserModel.findOne({name});

    console.log("fetched user data",user);
    console.log(await user.matchPassword(password));
    if(user && (await user.matchPassword(password)))
        {
            const response={
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:generateToken(user._id),
            };
        console.log(response);
        res.json(response);
        
        }
        else
        {
            res.status(401);
          throw new Error("Invalid UserName or Password");  
        }
});

const registerController=expressAsyncHandler (async(req,res)=>{
   const {name,email,password}= req.body;

   //check for all the required fields
   if(!name || !email || !password)
    {
        res.status(400);
        throw Error("All necessary inputs are been filled!!!");
    }

    //pre-existing user
    const userExist =await UserModel.findOne({email})
    if(userExist)
    {
        res.status(400);
        throw new Error("User already Exist");
    } 

    //userName already taken
    const userNameExist =await UserModel.findOne({name})
    if(userNameExist)
    {
        res.status(400);
        throw new Error("UserName already Taken");
    } 

    //create an entry in the DB
    const user=await UserModel.create({name,email,password});
   if(user)
    {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
        });
    }
    else
    {
        res.status(400);
       throw new Error("Registration Error");
    }

});

const  fetchAllUsersController=expressAsyncHandler(async(req,res)=>{
    const keyword=req.query.search
    ?{
        $or:[
            {name:{$regex:req.query.search,$options:"i"}},
            {email:{$regex:req.query.search,$options:"i"}},
        ],
    }
    : {};

    const users=await UserModel.find(keyword).find({
        _id:{$ne: req.user._id},
    });
    res.send(users);
})

module.exports={loginController,registerController,fetchAllUsersController,};