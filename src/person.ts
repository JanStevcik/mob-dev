import {Tongue} from './tongue'

export interface PersonDelegates {
    onBorn(): void

    log(message: any): void
}

export class Person {
    private tongue = new Tongue()
    private delegates: PersonDelegates | undefined
    private name: string

    constructor(delegates: PersonDelegates | undefined, name?:string) {
        this.delegates = delegates
        if (this.delegates?.onBorn) {
            this.delegates.onBorn()
        }
        this.name = name && name || 'Person'
    }

    say(message: string) {
        this.tongue.tell(message, this.name)
        if (this.delegates?.log) {
            this.delegates.log(message)
        }
    }
}
