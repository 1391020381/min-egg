import fs from 'fs'
import Router from 'koa-router'
const route = new Router()
loader()
export function loader() {
    const dirs = fs.readdirSync(__dirname + '/router')
    console.log('dirs:', JSON.stringify(dirs)) // ["home.ts","user.ts"]
    dirs.forEach(filename => {
        const mod = require(__dirname + '/router/' + filename).default
        // const mod2 = require(__dirname + '/router/' + filename)
        console.log('mod:', mod)
        Object.keys(mod).map(key => {
            const [method, path] = key.split(' ')
            const handler = mod[key];
            (<any>route)[method](path, handler)
        })
    })
    return route.routes();
}