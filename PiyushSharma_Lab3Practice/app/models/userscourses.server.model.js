const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserCourseSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    courseCode: {
        type: String,
        ref: 'Article'
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('UserCourse', UserCourseSchema);
