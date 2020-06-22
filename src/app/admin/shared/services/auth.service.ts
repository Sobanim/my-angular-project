import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../interfaces';

@Injectable()
export class AuthService{
    constructor(private http: HttpClient){}

    get token(): string {
        return ''
    }

    login(user: User){
        this.http.post('', user)

    }

    logout(user: User){

    }

    isAuthenticated(): boolean {
        return !!this.token
    }

    private setToket(){
        
    }
}