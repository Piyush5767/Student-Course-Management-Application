import { Component } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
    selector: 'listUsers',
    templateUrl: 'app/users/list/list.template.html'
})
export class UserListComponent {
    users: any;
    errorMessage: string;
    constructor(private _usersService: UsersService) { }
    ngOnInit() {
        this._usersService.listUsers().subscribe(users => this.users = users);
    }
}

