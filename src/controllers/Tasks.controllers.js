const Tasks = require('../models/Task');
ctrlTask = {};


ctrlTask.postTask = async (req, res) => {
    const { title, description } = req.body;

    const newtask = new Tasks({
        title,
        description,
        userId: req.user._id
    });

        const Task = await newtask.save();

      try {
        return res.json({
            msg: 'Creaste una tarea',
            Task
        })
      } catch (err) {
        console.log(err)
        return res.status(500).json({
            msg:'Error al crear la tarea'})
      }
  
}

ctrlTask.getTask = async (req, res) => {
    const tasks = await Tasks.find({ userId: req.user._id })
    .populate('userId', ['username','email'])
    return res.json(tasks);
}



module.exports = ctrlTask;