const mongoose = require('mongoose');
const Course = mongoose.model('Course');
const Article = mongoose.model('Collegecourse');
const uc = mongoose.model('UserCourse');
var ObjectId = require('mongodb').ObjectID;
function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};

//
exports.create = function (req, res) {
    const course = new Course(req.body);
    course.creator = req.user;
    course.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(course);
        }
    });
};

exports.appendCourse = function (req, res) {
    const appendcourse = new UserCourse(req.body);
    appendcourse.creator = req.user;
    appendcourse.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(appendcourse);
        }
    });
};

//
exports.list = function (req, res) {
    console.log('Test');
    Course.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, courses) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(courses);
        }
    });
};
//
exports.courseByID = function (req, res, next, id) {
    uc.find({ "creator": ObjectId(id) }).exec((err, result) => {
        if (err) {
            return next(err);
        } else {
            var arr = [];
            for (var i = 0; i < result.length; i++) {
                var obj = result[i];
                arr[i] = obj.courseCode;
            }
            Article.find({ courseCode: { $in: arr } }).exec((error, courses) => {
                if (err) {
                    return next(err);
                } else {
                    req.courses = courses;
                    next();
                }
            });
        }
    });
};
//
exports.read = function (req, res) {
    res.status(200).json(req.courses);
};
//
exports.update = function (req, res) {
    const course = req.course;
    course.title = req.body.title;
    course.content = req.body.content;
    course.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(course);
        }
    });
};
//
exports.delete = function (req, res) {
    const course = req.course;
    course.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(course);
        }
    });
};


//The hasAuthorization() middleware uses the req.article and req.user objects
//to verify that the current user is the creator of the current article
exports.hasAuthorization = function (req, res, next) {
    if (req.course.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};


