import {Tongue} from './tongue'

export interface PersonDelegates {
    onBorn(): void

    log(message: any): void
}

export class Person {
    private tongue = new Tongue()
    private delegates: PersonDelegates | undefined

    constructor(delegates: PersonDelegates | undefined) {
        this.delegates = delegates
        if (this.delegates?.onBorn) {
            this.delegates.onBorn()
        }
    }

    say(message: string) {
        this.tongue.tell(message)
        if (this.delegates?.log) {
            this.delegates.log(message)
        }
    }
}
