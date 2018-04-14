import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './list/list.component';
import { UserListCoursesComponent } from './courses/list.component';
export const UsersRoutes: Routes = [{
    path: 'users',
    component: UsersComponent,
    children: [
        { path: '', component: UserListComponent },
        { path: 'courses/:courseId', component: UserListCoursesComponent },
    ],
}];