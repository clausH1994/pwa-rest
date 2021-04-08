const router = require("express").Router();
const task = require("../models/task");
const { verifyToken } = require("../validation");

router.post("/", verifyToken, (req, res) => {

    data = req.body;

    task.insertMany(data).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
});

router.get("/", verifyToken, (req, res) => {

    data = req.body;

    task.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
});

router.get("/:id", verifyToken, (req, res) => {

    data = req.body;

    task.findById(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
});

router.put("/:id", verifyToken, (req, res) => {

    const id = req.params.id

    data = req.body;

    task.findByIdAndUpdate(id, req.body).then(data => {
        if (!data) {
            res.status(404).send({ message: "Cannotr update task with id=" + id + ". Maybe task was not found!" })
        }
        else {
            res.send({ message: "Task was successfully updated. " });
        }
    }).catch(err => { res.status(500).send({ message: "error updating task with id=" + id}); })

});

router.delete("/:id", verifyToken, (req, res) => {

    const id = req.params.id

    

    task.findByIdAndDelete(id).then(data => {
        if (!data) {
            res.status(404).send({ message: "Cannotr delete task with id=" + id + ". Maybe task was not found!" })
        }
        else {
            res.send({ message: "Task was successfully deleted. " });
        }
    }).catch(err => { res.status(500).send({ message: "error deleting task with id=" + id}); })

});


module.exports = router;