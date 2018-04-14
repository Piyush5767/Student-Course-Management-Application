import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'listCourses',
    templateUrl: 'app/users/courses/list.template.html'
})
export class UserListCoursesComponent {
    courses: any;
    paramsObserver: any;
    errorMessage: string;
    constructor(private _router: Router,private _usersService: UsersService, private _route: ActivatedRoute) { }

    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let courseId = params['courseId'];
            console.log(courseId);
            this._usersService.listCourses(courseId).subscribe(courses => { this.courses = courses }, error => this._router.navigate(['/users']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
}

