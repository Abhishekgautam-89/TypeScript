import { Router } from "express";
import {Todo} from '../model/todo'

const router = Router();

type requestBody = {text: string; todoID: string}
const todos :Todo[] = []

router.get('/', (req,res, next)=>{
    res.status(201).json({todo: todos})
})

router.post('/', (req,res)=>{
    console.log(req.body)
    const newTodo :Todo = {
        id: new Date().toLocaleString() ,
        text : req.body.text
    }
    todos.push(newTodo)
    res.status(201).json({message: "Successfully Added"})
})

router.post("/delete", (req,res)=>{
    const body = req.body as requestBody
    const todoID = body.todoID
    const todoIndex = todos.findIndex(todo=>todo.id==todoID)
    if(todoIndex>=0){
        todos.splice(todoIndex,1);
        return res.status(201).json({message: "successfully deleted"})
    }
    else
    // todos.splice(todos.findIndex(todo=>todo.id==todoID) ,1)
    res.status(404).json({message: "Item not found", data: todos})
})

router.post('/update', (req,res)=>{
    const body = req.body as requestBody
    const todoID = body.todoID
    const todoIndex = todos.findIndex(todo=>todo.id==todoID)
        if(todoIndex>=0){
            todos[todoIndex] = {id : todos[todoIndex].id, text: body.text}
            return res.status(201).json({message:"data successfully updated", data: todos})
        }
        else
        return res.status(404).json({message:"Item not found"})
})

export default router;