System.register(["./articles.component", "./create/create.component", "./list/list.component", "./view/view.component", "./edit/edit.component", "./append/append.component", "./selected/selected.component", "./exclude/exclude.component", "./studentcourse/list.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var articles_component_1, create_component_1, list_component_1, view_component_1, edit_component_1, append_component_1, selected_component_1, exclude_component_1, list_component_2, ArticlesRoutes;
    return {
        setters: [
            function (articles_component_1_1) {
                articles_component_1 = articles_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            },
            function (append_component_1_1) {
                append_component_1 = append_component_1_1;
            },
            function (selected_component_1_1) {
                selected_component_1 = selected_component_1_1;
            },
            function (exclude_component_1_1) {
                exclude_component_1 = exclude_component_1_1;
            },
            function (list_component_2_1) {
                list_component_2 = list_component_2_1;
            }
        ],
        execute: function () {
            exports_1("ArticlesRoutes", ArticlesRoutes = [{
                    path: 'articles',
                    component: articles_component_1.ArticlesComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: 'create', component: create_component_1.CreateComponent },
                        { path: 'append', component: append_component_1.AppendComponent },
                        { path: 'exclude', component: exclude_component_1.ExcludeComponent },
                        { path: 'selected', component: selected_component_1.SelectedComponent },
                        { path: ':articleId', component: view_component_1.ViewComponent },
                        { path: ':articleId/edit', component: edit_component_1.EditComponent },
                        { path: 'course/student/list/:courseId', component: list_component_2.UserCourseListComponent },
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=articles.routes.js.map