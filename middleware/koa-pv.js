function pv(ctx) {
  ctx.session.count++   // 会把session写进cookie中
  global.console.log('pv', ctx.path)
}

module.exports = function () {
  return async function (ctx, next) {
    pv(ctx)
    await next()
  }
}