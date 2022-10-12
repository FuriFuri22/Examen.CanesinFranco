const Tasks = require('../models/Tasks');
ctrlTask = {};


ctrlTask.postTask = async (req, res) => {
    const { title, description } = req.body;

    const task = new Tasks({
        title,
        description,
        userId: req.user._id
    });

        const newTask = await task.save();

        return res.json({
            msg: 'Creaste una tarea',
            newTask
        })
        return res.status(500).json({
            msg:'Error al crear la tarea'})
}

ctrlTask.getTasks = async (req, res) => {
    const tasks = await Tasks.find({ userId: req.user._id })
    .populate('userId', ['username','email'])
    return res.json(tasks);
}


module.exports = ctrlTask;