import {Person, PersonDelegates} from './person'

export class Woman extends Person {
    constructor(delegates?: PersonDelegates) {
        super(delegates)
    }
}
