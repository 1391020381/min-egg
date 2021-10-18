import Koa from 'koa';
import Router from 'koa-router';
const app = new Koa();

const router = new Router();
router.get('/', async (ctx, next) => {
    ctx.body = 'hello, ts-koa'
})
app.use(router.routes())
app.listen(3000, '127.0.0.1', () => {
    console.log(`服务器在运行:http://localhost:3000`);
})