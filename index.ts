import {Man} from './src/man'
import {Woman} from './src/woman'

// @ts-ignore
declare function require(name:string);
const process = require('process');

/** BEFORE YOU START
 *  Please create github repo where you will store your solution
 *  After every task please commit and push changes
 * */

const sebastian = new Man()
const natalia = new Woman()

//1.  Expected output: 4:13:02 PM
const getDate = () =>{
    let date = new Date().toLocaleString('en-US');
    return date.substr(date.indexOf(' ')+1);
}

process.stdout.write(getDate() + '\n');
sebastian.say('Hello my name is Sebastian')

process.stdout.write(getDate() + '\n');
natalia.say('Hello my name is Natalia')

process.stdout.write(getDate() + '\n');
sebastian.say('Are you free?')

process.stdout.write(getDate() + '\n');
natalia.say('No I have a boyfriend')

/** 2.

 * */

/** 3.

 * */


class World {
    constructor() {
    }
}



