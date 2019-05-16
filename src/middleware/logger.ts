const log = (ctx: any) => {
    console.log( ctx.method, ctx.header.host + ctx.url )
}

export default () => async (ctx:any, next: any) => {
    log(ctx)
    await next()
}
