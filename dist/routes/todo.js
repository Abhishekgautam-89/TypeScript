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
    const body = req.body;
    const todoID = body.todoID;
    const todoIndex = todos.findIndex(todo => todo.id == todoID);
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        return res.status(201).json({ message: "successfully deleted" });
    }
    else
        // todos.splice(todos.findIndex(todo=>todo.id==todoID) ,1)
        res.status(404).json({ message: "Item not found", data: todos });
});
router.post('/update', (req, res) => {
    const body = req.body;
    const todoID = body.todoID;
    const todoIndex = todos.findIndex(todo => todo.id == todoID);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(201).json({ message: "data successfully updated", data: todos });
    }
    else
        return res.status(404).json({ message: "Item not found" });
});
exports.default = router;
