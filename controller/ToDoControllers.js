const ToDoModel = require("../models/ToDoModels")

module.exports.getToDos = async (req, res) => {
    const toDos = await ToDoModel.find()
    res.send(toDos)
}

module.exports.saveToDo = (req, res) => {
    const { toDo } = req.body

    ToDoModel.create({ toDo })
        .then((data) => {
            console.log("Saved Successfully...");
            res.status(201).send(data)
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "something went wrong in save" })
        })
};

module.exports.updateToDo = (req, res) => {
    const { id } = req.params;//Is line of code se req.params se id nikala ja raha hai
    const { toDo } = req.body

    ToDoModel.findByIdAndUpdate(id, { toDo })
        .then(() => {
            res.send("Updated Successfully...")
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "something went wrong in update" })
        })
};

module.exports.deleteToDo = (req, res) => {
    const { id } = req.params;//Is line of code se req.params se id nikala ja raha hai

    ToDoModel.findByIdAndDelete(id)
        .then(() => {
            res.send("Deleted Successfully...")
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "something went wrong in Delete" })
        })
};