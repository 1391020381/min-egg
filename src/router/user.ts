const user = async (ctx: any, next: any) => {
    ctx.body = 'hello user'
}
const userInfo = async (ctx: any, next: any) => {
    ctx.body = 'hello,userinfo'
}

export default {
    'get /user': user,
    'get /userinfo': userInfo
}