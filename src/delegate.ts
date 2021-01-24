import {PersonDelegates} from "./person";

export class Delegate implements PersonDelegates{
    private delegates: Array<string> = []

    log(message: string): void {
        this.delegates.push(message)
    }

    getDelegates(){
        return this.delegates
    }

    onBorn(): void {
    }

}