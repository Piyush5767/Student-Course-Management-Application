const users = require('../../app/controllers/users.server.controller');
const articles = require('../../app/controllers/articles.server.controller');
//
module.exports = function (app) {
        app.route('/api/articles').get(articles.list)
        .post(users.requiresLogin, articles.create);
        app.route('/api/articles/append')
            .post(users.requiresLogin, articles.appendCourse);
        app.route('/api/articles/exclude/')
            .post(users.requiresLogin, articles.excludeCourse);
        app.route('/api/articles/selected')
            .get(users.requiresLogin,articles.listusercourses);
        app.route('/api/articles/:articleId')
            .get(articles.read)
            .put(users.requiresLogin, articles.hasAuthorization, articles.
                update)
            .delete(users.requiresLogin, articles.hasAuthorization, articles.
                delete);
        app.route('/api/articles/course/student/')
            .post(users.requiresLogin, articles.courseusersByID);
        app.param('articleId', articles.articleByID);
};
