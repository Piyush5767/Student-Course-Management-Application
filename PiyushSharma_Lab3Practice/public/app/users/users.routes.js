System.register(["./users.component", "./list/list.component", "./courses/list.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var users_component_1, list_component_1, list_component_2, UsersRoutes;
    return {
        setters: [
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (list_component_2_1) {
                list_component_2 = list_component_2_1;
            }
        ],
        execute: function () {
            exports_1("UsersRoutes", UsersRoutes = [{
                    path: 'users',
                    component: users_component_1.UsersComponent,
                    children: [
                        { path: '', component: list_component_1.UserListComponent },
                        { path: 'courses/:courseId', component: list_component_2.UserListCoursesComponent },
                    ],
                }]);
        }
    };
});
//# sourceMappingURL=users.routes.js.map