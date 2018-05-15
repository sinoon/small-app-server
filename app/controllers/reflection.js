exports.index = ctx => {
    const data = reqSerializer(ctx)
    ctx.res.ok(data)
}

function reqSerializer (ctx = {}) {
    return {
        method: ctx.method,
        path: ctx.path,
        url: ctx.url,
        headers: ctx.headers,
        protocol: ctx.protocol,
        ip: ctx.ip,
        query: ctx.query,
        body: ctx.request.body
    }
}
