const getNews = require('../modules/getNews')

exports.index = async ctx => {
    const news = await getNews()

    ctx.res.ok(news.data, 'success')
}
