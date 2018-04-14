import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class UsersService {
    private _baseURL = 'api/users';
    constructor(private _http: Http) { }
    listUsers(): Observable<any> {
        return this._http
            .get(this._baseURL)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    listCourses(courseId: string): Observable<any> {
        return this._http
            .get(`${this._baseURL + '/courses'}/${courseId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    } 
    private handleError(error: Response) {
        return Observable.throw(error.json().message || 'Server error');
    }
}
