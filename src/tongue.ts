export class Tongue {
    constructor() {
    }

    tell(message: string, name?:string) {
        if(name){

            //Check if last character of name si 's' because of apostrophe.
            const output_name = name.substr(name.length - 1) === 's' ? `${name}'` : `${name}'s`;
            console.log(`${output_name} tongue says: ${message}`)
        }else{

            console.log(`Person tongue says: ${message}`)
        }
    }
}
