const home = async (ctx: any, next: any) => {
    ctx.body = 'hello home'
}


export default {
    'get /home': home
}