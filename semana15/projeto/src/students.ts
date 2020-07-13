import {User} from './users'
import moment from 'moment'

export class Student implements User {


    constructor (
        public id: string,
        public name: string,
        public email : string,
        public birthDate : moment,
        public hobbies : string[]
    ) {}

    public getAge() : number {
        return moment().diff(this.birthDate, "years")
    }

}