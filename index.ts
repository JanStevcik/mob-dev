import {Man} from './src/man'
import {Woman} from './src/woman'
import {Delegate} from "./src/delegate"

// @ts-ignore
declare function require(name:string)
const process = require('process')

class World {
    private delegate = new Delegate()
    private natalia = new Woman(this.delegate, 'Natalia')
    private sebastian = new Man(this.delegate, 'Sebastian')

    constructor() {
    }

    private getDate = () => {
        let date = new Date().toLocaleString('en-US')
        return date.substr(date.indexOf(' ')+1)
    }

    public communicate(){
        process.stdout.write(this.getDate() + '\n')
        this.sebastian.say('Hello my name is Sebastian')

        process.stdout.write(this.getDate() + '\n')
        this.natalia.say('Hello my name is Natalia')

        process.stdout.write(this.getDate() + '\n')
        this.sebastian.say('Are you free?')

        process.stdout.write(this.getDate() + '\n')
        this.natalia.say('No I have a boyfriend')
    }

    public printLogs(){
        console.log(this.delegate.getDelegates())
    }
}

const world = new World()
world.communicate()
world.printLogs()



