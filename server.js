const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const swaggerDefinition = yaml.load('./swagger.yaml');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");
const projectRoutes = require("./routes/project");
const authRoutes = require("./routes/auth");

require("dotenv-flow").config();

// Handle CORS 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, auth-token, Accept");
    next();
  });

app.use(bodyParser.json());



mongoose.connect(
    process.env.DBHOST,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).catch(error => console.log("Error connecting to MongoDB:" + error));

mongoose.connection.once("open", () => console.log("Connected suscessfully  to MongoDB"));

app.get("/api/welcome", (req, res) => {

    res.status(200).send({message: "Welcome to the PWA_Rest_API"});
})

app.use("/api/users",   userRoutes);

app.use("/api/tasks",  taskRoutes);

app.use("/api/projects",  projectRoutes);

app.use("/api/users", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
    console.log("Server is running on port: " +  PORT);
})

module.exports = app;