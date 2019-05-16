import Koa from 'koa2'
// import logger from './middleware/logger'
// import fs from 'fs'
// import Router from 'koa-router'

// import bodyParser from 'koa-bodyparser'
// import koaStatic from 'koa-static'
// import path from 'path'

import jsonp from 'koa-jsonp'

const app = new Koa()
// 使用中间件
app.use(jsonp())

app.use(async(ctx: any) => {
    let returnData = {
        success: true,
        data: {
            text: 'this is a jsonp api',
            time: new Date().getTime()
        }
    }

    // 直接输出JSON
    ctx.body = returnData
})

// app.use(async (ctx: any) => {
//     if ( ctx.url === '/index' ) {
//         ctx.cookies.set(
//             'cid', 
//             'hello world',
//             {
//                 domain: 'localhost',  // 写cookie所在的域名
//                 path: '/index',       // 写cookie所在的路径
//                 maxAge: 10 * 60 * 1000, // cookie有效时长
//                 expires: new Date('2017-02-15'),  // cookie失效时间
//                 httpOnly: false,  // 是否只用于http请求中获取
//                 overwrite: false  // 是否允许重写
//             }
//         )
//         ctx.body = 'cookie is ok'
//     } else {
//         ctx.body = 'hello world' 
//     }
// })

// app.use(bodyParser())

// const staticPath = './static'

// app.use(koaStatic(
//     path.join( __dirname,  staticPath)
// ))

// app.use(async (ctx: any) => {
//     if ( ctx.url === '/' && ctx.method === 'GET' ) {
//         // 当GET请求时候返回表单页面
//         let html = `
//             <form method="POST" action="/">
//                 <p>userName</p>
//                 <input name="userName" /><br/>
//                 <p>nickName</p>
//                 <input name="nickName" /><br/>
//                 <p>email</p>
//                 <input name="email" /><br/>
//                 <button type="submit">submit</button>
//             </form>
//         `
//         ctx.body = html
//     } else if ( ctx.url === '/' && ctx.method === 'POST' ) {
//         // 当POST请求的时候，解析POST表单里的数据，并显示出来
//         // let postData = await parsePostData( ctx )
//         ctx.body = ctx.request.body
//     } else {
//         // 其他请求显示404
//         ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
//     }
// })

// 解析上下文里node原生请求的POST参数
// function parsePostData(ctx: any) {
//     return new Promise((resolve, reject) => {
//         try {
//             let postdata = "";
//             ctx.req.addListener('data', (data: any) => {
//                 postdata += data
//             })

//             ctx.req.addListener("end",function(){
//                 let parseData = parseQueryStr( postdata )
//                 resolve( parseData )
//             })
//         } catch ( err ) {
//             reject(err)
//         }
//     })
// }

// // 将POST请求参数字符串解析成JSON
// function parseQueryStr(queryStr: any) {
//     let queryData: any = {}
//     let queryStrList = queryStr.split('&')
//     console.log( queryStrList )
//     for (queryStr of queryStrList) {
//         let itemList = queryStr.split('=')
//         queryData[itemList[0]] = decodeURIComponent(itemList[1])
//     }
//     return queryData
// }

// app.use(async (ctx: any) => {
//     let url = ctx.url
//     // 从上下文的request对象中获取
//     let request = ctx.request
//     let req_query = request.query
//     let req_querystring = request.querystring

//     // 从上下文中直接获取
//     let ctx_query = ctx.query
//     let ctx_querystring = ctx.querystring

//     ctx.body = {
//         url,
//         req_query,
//         req_querystring,
//         ctx_query,
//         ctx_querystring
//     }
// })

// let home = new Router()

// // 子路由1
// home.get('/', async ( ctx: any ) => {
//     let html = `
//         <ul>
//             <li><a href="/page/helloworld">/page/helloworld</a></li>
//             <li><a href="/page/404">/page/404</a></li>
//         </ul>
//     `

//     ctx.body = html
// })

// // 子路由2
// let page = new Router()
//     page.get('/404', async ( ctx: any )=>{
//     ctx.body = '404 page!'
// }).get('/helloworld', async ( ctx: any )=>{
//     ctx.body = 'helloworld page!'
// })

// // 装载所有子路由
// let router = new Router()
// router.use('/', home.routes())
// router.use('/page', page.routes())

// // 加载路由中间件
// app.use(router.routes())
// app.use(router.allowedMethods())

app.listen(10010, () => {
    console.log('[demo] route-use-middleware is starting at port 10010')
})

// app.use(async (ctx: any) => {
//     // let url = ctx.url
//     // // 从上下文的request对象中获取
//     // let request = ctx.request
//     // let req_query = request.query
//     // let req_querystring = request.querystring
  
//     // // 从上下文中直接获取
//     // let ctx_query = ctx.query
//     // let ctx_querystring = ctx.querystring
  
//     let url = ctx.request.url
//     // let html = await route( url )
//      ctx.body = { url }
// })

// app.listen(10010)

// const render = ( page: any ) => {
//     return new Promise(( resolve, reject ) => {
//         let viewUrl = `./src/views/${page}`
//         fs.readFile(viewUrl, "binary", ( err, data ) => {
//             if ( err ) {
//                 reject( err )
//             } else {
//                 resolve( data )
//             }
//         })
//     })
// }

// const route = async ( url: any ) => {
//     let view = '404.html'
//     switch ( url ) {
//         case '/':
//             view = 'index.html'
//             break
//         case '/index':
//             view = 'index.html'
//             break
//         case '/todo':
//             view = 'todo.html'
//             break
//         case '/404':
//             view = '404.html'
//             break
//         default:
//             break
//     }

//     let html = await render( view )
//     return html
// }

console.log('[demo] start-quick is starting at port 10010')