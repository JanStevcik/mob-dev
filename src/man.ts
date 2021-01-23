import {Person, PersonDelegates} from './person'

export class Man extends Person {
    constructor(delegates?: PersonDelegates, name?: string){
        super(delegates, name)
    }
}
