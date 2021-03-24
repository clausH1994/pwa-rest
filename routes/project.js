const router = require("express").Router();
const project = require("../models/project");

router.post("/", (req, res) => {

    data = req.body;

    project.insertMany(data).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
});

router.get("/", (req, res) => {

    data = req.body;

    project.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
});

router.get("/:id", (req, res) => {

    data = req.body;

    project.findById(req.params.id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
});

router.put("/:id", (req, res) => {

    const id = req.params.id

    data = req.body;

    project.findByIdAndUpdate(id, req.body).then(data => {
        if (!data) {
            res.status(404).send({ message: "Cannotr update user with id=" + id + ". Maybe user was not found!" })
        }
        else {
            res.send({ message: "User was successfully updated. " });
        }
    }).catch(err => { res.status(500).send({ message: "error updating user with id=" + id}); })

});

router.delete("/:id", (req, res) => {

    const id = req.params.id

    

    project.findByIdAndDelete(id).then(data => {
        if (!data) {
            res.status(404).send({ message: "Cannotr delete user with id=" + id + ". Maybe user was not found!" })
        }
        else {
            res.send({ message: "User was successfully deleted. " });
        }
    }).catch(err => { res.status(500).send({ message: "error deleting User with id=" + id}); })

});

module.exports = router;