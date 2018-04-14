import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'exclude',
    templateUrl: 'app/articles/exclude/exclude.template.html'
})
export class ExcludeComponent {
    article: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: ArticlesService) { }
    exclude() {
        this._articlesService
            .exclude(this.article)
            .subscribe(createdArticle => this._router.navigate(['/articles/selected']),
            error => this.errorMessage = error);
    }
}
