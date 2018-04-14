import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'append',
    templateUrl: 'app/articles/append/append.template.html'
})
export class AppendComponent {
    article: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: ArticlesService) { }
    append() {
        this._articlesService
            .append(this.article)
            .subscribe(createdArticle => this._router.navigate(['/articles/selected']),
            error => this.errorMessage = error);
    }
}
