const { find, findById, findByIdAndUpdate } = require('../models/Task');
const Tasks = require('../models/Task');
ctrlTask = {};


ctrlTask.postTask = async (req, res) => {
const idUser =  req.user._id;

if(!idUser){
    return res.json({
        msg: "No esta autorizado a modificar esta tarea"
    })
}

    const { title, description } = req.body;

    const newtask = new Tasks({
        title,
        description,
        userId: idUser
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
    const tasks = await Tasks.find({ userId: req.user._id, isActive: true })
    .populate('userId', ['username','email']);

    return res.json(tasks);
}

ctrlTask.putTask = async(req, res)=>{
    const userId = await req.user._id
    const taskId = req.params.id;
    const { title, description, state } = req.body;
    
    const taskFind = await Tasks.findById(taskId);
    if(!userId || userId != taskFind.userId){
        return res.json({
            msg: "No esta autorizado a modificar esta tarea"
        })
    }
    if(!taskFind|| taskFind.isActive==false){
        return res.json({
            msg: "Tarea no encontrada"
        })
    }
try {
    
    await Tasks.updateOne({title, description, state});
    return res.status(200).json({
        message: 'La tarea ha sido actualizada'
    })
} catch (error) {
    console.log(error)
}

}

ctrlTask.deleteTask = async(req, res)=>{
    const userId = await req.user._id;
    const taskId = req.params.id;
    const taskFind = await Tasks.findById(taskId);

    if(!userId || userId != taskFind.userId){
        return res.json({
            msg: "No esta autorizado a modificar esta tarea"
        })
    }

    if(!taskFind|| taskFind.isActive==false){
        return res.json({
            msg: "Tarea no encontrada"
        })
    }
try {
     Tasks.updateOne(taskFind.isActive = false)
     return res.json({
        msg: "Tarea eliminada"
     })
} catch (error) {
    console.log(error)
}
   

}

module.exports = ctrlTask;