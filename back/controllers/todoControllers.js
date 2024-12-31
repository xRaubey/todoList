const todoModel = require('../models/todoModel')
const {AppError} = require("../utils/errors");
const todoPostController = async (req,res)=>{
  try{
    const title = req.body.title;
    if(!title){
        throw new AppError('Title is required', 422);
    }
    const result =  new todoModel({title:title});
    await result.save();
    if(!result){
     throw new AppError('Post Error',422)
    }
    res.status(200).json(result)
  }
  catch (e){
    res.status(e.statusCode || 500).json({error:e.message});
  }
}

const todoGetController = async (req,res)=>{
  try{
     const result = await todoModel.find({});
     if(!result){
      throw new AppError('No Todos',404)
     }
    res.status(200).json(result)
  }
  catch (e){
   res.status(e.statusCode || 500).send(e.message);
  }
}

const todoPutController = async (req,res)=>{
  try{
    const newTitle = req.body.title;
    const id = req.params.id;
    const result = await todoModel.findByIdAndUpdate(id,
        {title:newTitle},
        { new: true }
    );
    if(!result){
      throw new AppError('User Not Found')
    }
    res.status(200).json(result)
  }
  catch (e){
   res.status(e.statusCode || 500).json({error:e.message});
  }
}

const todoDeleteController = async (req,res)=>{
  try{
      const id = req.params.id;
     const result = await todoModel.findByIdAndDelete(id);
      if(!result){
          throw new AppError('User Not Found',404)
      }
      res.status(200).json(result)
  }
  catch (e){
   res.status(e.statusCode || 500).json({error:e.message});
  }
}

const todoCompleteController = async (req,res)=>{
    try{
        const id = req.params.id;
        const result = await todoModel.findByIdAndUpdate(id,{completed: true}, {new: true});
        if(!result){
            throw new AppError('Complete Error',500)
        }
        res.status(200).json(result)
    }
    catch (e){
        res.status(e.statusCode || 500).json({error:e.message});
    }
}
module.exports = {todoDeleteController,todoPutController,todoPostController,todoGetController, todoCompleteController}
