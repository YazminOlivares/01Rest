const express = require ('express');
const router = express.Router();

const taskController = require('../controller/taskController')

router.get('/', (req, res) =>{
    const tasks = taskController.getAllTasks();
    res.status(200).json(tasks); 
});

router.post('/create', (req, res)=>{
    const {title, description} = req.body;
    const newTask = taskController.createTask( title, description );
    res.status(200).json(newTask);
});

router.delete('/delete', (req, res)=>{
    const {id} = req.body;
    const deleteTask = taskController.deleteTask( id );
    res.status(200).json(deleteTask);
});

router.post('/update', (req, res)=>{
    const {id, title, description} = req.body;
    const updateTask = taskController.updateTask( id, title, description );
    res.status(200).json(updateTask);
});

router.get('/get', (req, res) =>{
    const {id} = req.body;
    const task = taskController.getOneTask( id );
    res.status(200).json(task); 
});

module.exports = router;