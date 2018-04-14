import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AppendComponent } from './append/append.component';
import { SelectedComponent } from './selected/selected.component';
import { ExcludeComponent } from './exclude/exclude.component';
import { UserCourseListComponent } from './studentcourse/list.component';
export const ArticlesRoutes: Routes = [{
    path: 'articles',
    component: ArticlesComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'create', component: CreateComponent },
        { path: 'append', component: AppendComponent },
        { path: 'exclude', component: ExcludeComponent },
        { path: 'selected', component: SelectedComponent },
        { path: ':articleId', component: ViewComponent },
        { path: ':articleId/edit', component: EditComponent },
        { path: 'course/student/list/:courseId', component: UserCourseListComponent },
    ],
}];