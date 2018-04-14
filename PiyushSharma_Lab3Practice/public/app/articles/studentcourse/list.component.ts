import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'studentcourse_select',
    templateUrl: 'app/articles/studentcourse/list.template.html'
})
export class UserCourseListComponent {
    users: any;
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _articlesService: ArticlesService) { }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['courseId'];
            this._articlesService
                .listUserCourse(articleId)
                .subscribe(
                    users => {
                        this.users = users;
                    },
                    error => this._router.navigate(['/articles'])
                );
        });
    }

    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
}

