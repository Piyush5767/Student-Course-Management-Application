import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'selected',
    templateUrl: 'app/articles/selected/selected.template.html'
})
export class SelectedComponent {
    articles: any;
    errorMessage: string;
    constructor(private _articlesService: ArticlesService) { }
    ngOnInit() {
        this._articlesService.selected().subscribe(articles => this.articles = articles);
    }
}

