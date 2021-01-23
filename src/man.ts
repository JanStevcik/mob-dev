import {Person, PersonDelegates} from './person'

export class Man extends Person {
    constructor(delegates?: PersonDelegates) {
        super(delegates)
    }
}
