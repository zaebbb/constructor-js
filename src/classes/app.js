import { Sidebar } from "./sidebar"
import { Site } from "./site"

export class App{
    constructor(model){
        this.model = model
    }

    init(){
        const site = new Site('#site')

        const updateBlock = newBlock => {
            this.model.push(newBlock)
            site.render(this.model)
        }

        new Sidebar('#panel', updateBlock)

        site.render(this.model)
    }
}