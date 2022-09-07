export function row(content, styles = ''){ return `<div style="${styles}" class="row">${content}</div>`}
export function col(content){ return `<div class="col-sm">${content}</div>`}
export function css(styles = {}){
    if(typeof styles === 'string') return styles
    return Object.keys(styles).map(key => `${key}: ${styles[key]};`).join('')
}
export function block(type){
    return `
        <form name="${type}">
            <h5>Тип "${type}"</h5>
            <div class="form-group mt-2">
                <input class="form-control form-control-sm" name="value" placeholder="Содержимое">
            </div>
            <div class="form-group mt-2">
                <input class="form-control form-control-sm" name="styles" placeholder="Стили">
            </div>
            <button type="submit" class="btn btn-primary btn-sm mt-2">Добавить</button>
        </form>
        <hr>
    `
}