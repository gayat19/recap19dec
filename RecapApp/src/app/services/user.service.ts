import { User } from '../models/user';

export class UserService{
    users:User[];
    constructor(){
        this.users = [
            new User("U001","ABC"),
            new User("U002","XYZ")
        ]
    }

    addUser(user:User){
        this.users.push(user);
    }

    getUsers(){
        return this.users;
    }
}