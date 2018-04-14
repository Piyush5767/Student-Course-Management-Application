System.register(["@angular/core", "@angular/router", "../articles.service"], function (exports_1, context_1) {
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
    var core_1, router_1, articles_service_1, UserCourseListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            }
        ],
        execute: function () {
            UserCourseListComponent = /** @class */ (function () {
                function UserCourseListComponent(_router, _route, _articlesService) {
                    this._router = _router;
                    this._route = _route;
                    this._articlesService = _articlesService;
                }
                UserCourseListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var articleId = params['courseId'];
                        _this._articlesService
                            .listUserCourse(articleId)
                            .subscribe(function (users) {
                            _this.users = users;
                        }, function (error) { return _this._router.navigate(['/articles']); });
                    });
                };
                UserCourseListComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                UserCourseListComponent = __decorate([
                    core_1.Component({
                        selector: 'studentcourse_select',
                        templateUrl: 'app/articles/studentcourse/list.template.html'
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        router_1.ActivatedRoute,
                        articles_service_1.ArticlesService])
                ], UserCourseListComponent);
                return UserCourseListComponent;
            }());
            exports_1("UserCourseListComponent", UserCourseListComponent);
        }
    };
});
//# sourceMappingURL=list.component.js.map