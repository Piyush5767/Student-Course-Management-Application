System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./users.routes", "./users.component", "./list/list.component", "./courses/list.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, users_routes_1, users_component_1, list_component_1, list_component_2, UsersModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_routes_1_1) {
                users_routes_1 = users_routes_1_1;
            },
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
            UsersModule = /** @class */ (function () {
                function UsersModule() {
                }
                UsersModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forChild(users_routes_1.UsersRoutes),
                        ],
                        declarations: [
                            users_component_1.UsersComponent,
                            list_component_1.UserListComponent,
                            list_component_2.UserListCoursesComponent
                        ]
                    })
                ], UsersModule);
                return UsersModule;
            }());
            exports_1("UsersModule", UsersModule);
        }
    };
});
//# sourceMappingURL=users.module.js.map