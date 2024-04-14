import { listIndexes } from '#services/service'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  const collections = await listIndexes()
  return {
    collections,
  }
})
