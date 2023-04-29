"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get('/', (req, res, next) => {
    res.status(201).json({ todo: todos });
});
router.post('/', (req, res) => {
    console.log(req.body);
    const newTodo = {
        id: new Date().toLocaleString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Successfully Added" });
});
router.post("/delete", (req, res) => {
    const todoID = req.body.todoID;
    const todoIndex = todos.findIndex(todo => todo.id == todoID);
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        return res.status(201).json({ message: "successfully deleted" });
    }
    else
        // todos.splice(todos.findIndex(todo=>todo.id==todoID) ,1)
        res.status(401).json({ message: "ID not found", data: todos });
});
router.post('/update', (req, res) => {
    const todoID = req.body.todoID;
    const todoIndex = todos.findIndex(todo => todo.id == todoID);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(201).json({ message: "data successfully updated", data: todos });
    }
    else
        return res.status(400).json({ message: "Id not found" });
});
exports.default = router;
