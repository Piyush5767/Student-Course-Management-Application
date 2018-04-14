import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {UsersRoutes } from './users.routes';
import { UsersComponent } from './users.component';
import { UserListComponent } from './list/list.component';
import { UserListCoursesComponent } from './courses/list.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(UsersRoutes),
    ],
    declarations: [
        UsersComponent,
        UserListComponent,
        UserListCoursesComponent
    ]
})
export class UsersModule { }
