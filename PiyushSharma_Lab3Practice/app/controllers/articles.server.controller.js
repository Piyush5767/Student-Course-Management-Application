const mongoose = require('mongoose');
const Article = mongoose.model('Collegecourse');
const UC = mongoose.model('UserCourse');
const User = require('mongoose').model('User');
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
    const article = new Article(req.body);
    article.creator = req.user;
    article.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(article);
        }
    });
};

exports.appendCourse = function (req, res) {
    var user = req.user;
    Article.findOne({ courseCode: req.body.courseCode}, function (err, result) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            console.log(result);
            const appendcourse = new UC(req.body);
            appendcourse.creator = user;
            appendcourse.courseCode = req.body.courseCode;
            appendcourse.save((err) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {
                    res.status(200).json(appendcourse);
                }
            });
        }
    });
    
};

/*
exports.excludeCourse = function (req, res) {    
    var user = req.user;
    var courseCode = req.body.courseCode;
    console.log(courseCode);
    console.log(user._id);
    UC.find({ courseCode: req.body.courseCode, creator: ObjectId(user._id) }).exec((err, article) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            console.log(article);    
            UC.findAndModify({ query: { courseCode: req.body.courseCode }, remove: true });
        }
    });
};*/

exports.excludeCourse = function (req, res) {
    var user = req.user;
    var courseCode = req.body.courseCode;
    console.log(courseCode);
    console.log(user._id);
    UC.find({ courseCode: req.body.courseCode, creator: ObjectId(user._id) }).remove().exec((err, article) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(article);
        }
    });
};

//
exports.list = function (req, res) {
    Article.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, articles) => {
if (err) {
        return res.status(400).send({
            message: getErrorMessage(err)
        });
    } else {
        res.status(200).json(articles);
    }
});
};
//
exports.listusercourses = function (req, res) {
    var user = req.user;
    //Article.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, articles) => {
    UC.find({ creator:user }).exec((err, result) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            var arr = [];
            console.log(result);
            for (var i = 0; i < result.length; i++) {
                var obj = result[i];
                arr[i] = obj.courseCode;
            }
            console.log(arr);
            Article.find({ courseCode: { $in: arr }}).exec((error, articles) => {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(error)
                    });
                } else {
                    res.status(200).json(articles);
                }
            });
            //res.status(200).json(result);
        }
    });
};

//
exports.usercourseByID = function (req, res, next, id) {
    UC.findById(id).exec((err, article) => {
        if (err) return next(err);
if (!article) return next(new Error('Failed to load article '
        + id));
    req.article = article;
    next();
});
};
//
exports.csrread = function (req, res) {
    res.status(200).json(req.article);
};
//

exports.articleByID = function (req, res, next, id) {
    Article.findById(id).populate('creator', 'firstName lastName fullName').exec((err, article) => {
        if (err) return next(err);
        if (!article) return next(new Error('Failed to load article '
            + id));
        req.article = article;
        next();
    });
};
//
exports.read = function (req, res) {
    res.status(200).json(req.article);
};


exports.update = function (req, res) {
    const article = req.article;
    article.title = req.body.title;
    article.content = req.body.content;
    article.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(article);
        }
    });
};
//
exports.delete = function (req, res) {
    const article = req.article;
    article.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(article);
        }
    });
};


exports.usrcsrdelete = function (req, res) {
    const usercourse = req.article;
    usercourse.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(usercourse);
        }
    });
};

exports.courseusersByID = function (req, res) {
    console.log();
    UC.find({ courseCode: req.body.articleId }).exec((err, result) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            var arr = [];
            for (var i = 0; i < result.length; i++) {
                var obj = result[i];
                arr[i] = obj.creator;
            }
            var obj_ids = arr.map(function (ar) { return ObjectId(ar) });
            console.log(arr)
            User.find({ "_id": { "$in": obj_ids } }).exec((error, users) => {
                if (error) {
                    return res.status(400).send({
                        message: getErrorMessage(error)
                    });
                } else {
                    console.log(users);
                    res.status(200).json(users);
                }
            });
        }
    });
};

exports.readcourseusers = function (req, res) {
    console.log("Hi");
    res.status(200).json(req.users);
};

//The hasAuthorization() middleware uses the req.article and req.user objects
//to verify that the current user is the creator of the current article
exports.hasAuthorization = function (req, res, next) {
    if (req.article.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};


