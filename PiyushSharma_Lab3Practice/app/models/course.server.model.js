const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    courseCode: {
        type: String,
        trim: true,
        required: 'Course Code cannot be blank'
    },
    courseName: {
        type: String,
        trim: true,
        required: 'Course Name cannot be blank'
    },
    courseSection: {
        type: String,
        trim: true,
    },
    courseSemester: {
        type: String,
        trim: true,
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Course', CourseSchema);
