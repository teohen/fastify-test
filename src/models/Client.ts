
export class Client {
    id: number
    name: string
    birthDate: Date
    github: string

    constructor(name: string, birthDate: Date, github: string){
        this.name = name
        this.birthDate = birthDate
        this.github = github
    }
}