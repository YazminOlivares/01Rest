let tasks = [
    {
        id: 1,
        title: "Tarea1",
        description: "Descripción de la tarea 1",
    },
    {
        id: 2,
        title: "Tarea2",
        description: "Descripción de la tarea 2",
    },
    {
        id: 3,
        title: "Tarea3",
        description: "Descripción de la tarea 3",
    }
];

function getAllTasks(){
    return tasks;
}

function createTask( title, description ){
    const newTask = {
        id: tasks.length+1,
        title,
        description
    };

    tasks.push(newTask);
    return newTask;
}

function deleteTask( id ){
    tasks.splice(parseInt(id)-1, 1);
    return tasks;
}

function updateTask( id, title, description ){
    elementIndex = tasks.findIndex((obj => obj.id == id));
    tasks[elementIndex].title = title;
    tasks[elementIndex].description = description;
    return tasks;
}

function getOneTask( id ){
    const task = tasks.find((obj => obj.id == id));
    return task;
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getOneTask
}