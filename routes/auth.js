const router = require("express").Router();
const User = require("../models/user");
const { registerValidation } = require('../validation');
const bcrypt = require('bcrypt');

router.post("/register", async(req, res) =>{
    const { error } = registerValidation(req.body);

    if(error) {
        return res.status(400).json({error: error.details[0].message});
    }

    const emailExist = await User.findOne({ email: req.body.email});

    if(emailExist) {
        return res.status(400).json({ error: "Email already exists"});
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const userObject = new User({
        name: req.body.name,
        email: req.body.email,
        password
    });

    try {
        const savedUser = await userObject.save();
        res.json({error: null, data: savedUser._id });
    } catch (error) {
        res.status(400).json({ error });
    }
});


router.post("/login", async(req, res) => {
    const { error } = loginValidation(req.body);

    if(error) {
        return res.status(400).json({error: error.details[0].message});
    }

    const user = await User.findOne({ email: req.body.email});

    if(!user) {
        return res.status(400).json({ error: "Email is wrong"});
    }

    const validpassword = await bcrypt.compare(req.body.password, user.password);

    if(!validpassword) {
        return res.status(400).json({ error: "Password is wrong"});
    }

    

    return res.status(200).json({ msg: "login route..."});
})

module.exports = router;