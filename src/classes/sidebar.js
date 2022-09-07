import { block } from "../utilus"
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from "./blocks"

export class Sidebar{
    constructor(selector, updateBlock){
        this.el = document.querySelector(selector)
        this.update = updateBlock
    
        this.init()
    }
    
    init(){
        this.el.insertAdjacentHTML('afterbegin', this.template)
        this.el.addEventListener('submit', this.addBlock.bind(this))
    }

    get template(){
        return [
            block('text'),
            block('title'),
            block('columns'),
            block('image')
        ].join('')
    }

    addBlock(event){
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        let newBlock = type === 'text' ?
            newBlock = new TextBlock(value,{styles})
            : type === 'title' ?
            newBlock = new TitleBlock(value,{styles})
            : type === 'columns' ?
            newBlock = new ColumnsBlock(value,{styles})
            : type === 'image' ?
            newBlock = new ImageBlock(value,{styles})
            : ''

        this.update(newBlock)
        event.target.value.value = ''
        event.target.styles.value = ''
    }
}
