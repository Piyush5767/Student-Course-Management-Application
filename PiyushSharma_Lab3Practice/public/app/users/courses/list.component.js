System.register(["@angular/core", "../users.service", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, users_service_1, router_1, UserListCoursesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            UserListCoursesComponent = /** @class */ (function () {
                function UserListCoursesComponent(_router, _usersService, _route) {
                    this._router = _router;
                    this._usersService = _usersService;
                    this._route = _route;
                }
                UserListCoursesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var courseId = params['courseId'];
                        console.log(courseId);
                        _this._usersService.listCourses(courseId).subscribe(function (courses) { _this.courses = courses; }, function (error) { return _this._router.navigate(['/users']); });
                    });
                };
                UserListCoursesComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                UserListCoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'listCourses',
                        templateUrl: 'app/users/courses/list.template.html'
                    }),
                    __metadata("design:paramtypes", [router_1.Router, users_service_1.UsersService, router_1.ActivatedRoute])
                ], UserListCoursesComponent);
                return UserListCoursesComponent;
            }());
            exports_1("UserListCoursesComponent", UserListCoursesComponent);
        }
    };
});
//# sourceMappingURL=list.component.js.map