import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
    selector: 'users',
    template: '<router-outlet></router-outlet>',
    providers: [UsersService]
})
export class UsersComponent { }
