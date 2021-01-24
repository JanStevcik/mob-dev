export class Tongue {
    constructor() {
    }

    tell(message: string, name: string) {
        const output_name = name.substr(name.length - 1) === 's' ? `${name}'` : `${name}'s`;
        console.log(`${output_name} tongue says: ${message}`)
    }
}
