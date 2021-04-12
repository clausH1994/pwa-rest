process.env.NODE_ENV = 'test';

const User = require('../models/user');
const Project = require('../models/project');
const Task = require('../models/task');

before((done) => {
    User.deleteMany({}, function(err) {});
    Project.deleteMany({}, function(err) {});
    Task.deleteMany({}, function(err) {});
    done();
});

after((done) => {
    User.deleteMany({}, function(err) {});
    Project.deleteMany({}, function(err) {});
    Task.deleteMany({}, function(err) {});
    done();
});