import { Feed } from 'feed'
import { queryContent } from '@nuxt/content'

const basePath = 'https://dirqaharaka.github.io/'

export default defineEventHandler(async (event) => {
  setHeader(event, 'content-type', 'text/xml')
  const docs = await queryContent(event).sort({ date: -1 }).find()
  const feed = new Feed({
    title: "Dirqa's personal blog site",
    description: "Dirqa's personal blog site",
    id: basePath,
    link: basePath,
    language: 'en',
    favicon: `${basePath}/favicon.ico`,
    copyright: 'MIT',
    author: {
      name: 'Dirqa Haraka Putra Nursadih',
      email: 'dirqaharaka@gmail.com',
      link: basePath,
    },
  })

  // Add the feed items
  docs.forEach((doc) => {
    feed.addItem({
      title: doc.title || '',
      id: basePath + doc._path,
      link: basePath + doc._path,
      description: doc.description,
      content: doc.description,
      date: new Date(doc.date),
    })
  })

  return feed.rss2()
})
