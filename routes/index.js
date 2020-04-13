const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  global.console.log('3333')
  ctx.cookies.set('pvid', Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    cookie: ctx.cookies.get('pvid')
  }
})

router.get('/test', async (ctx, next) => {
  const a = await 123
  const b = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('bbb')
    }, 1000)
  })
  const c = await Promise.resolve('ccc')
  const d = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ddd')
    }, 2000)
  })
  ctx.body = {
    a, 
    b, 
    c,
    d
  }
})

module.exports = router
