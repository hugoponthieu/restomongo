/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { mongoInstance } from '#config/mongo'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  // const resto = await mongolevrai.db('restaurants')
  return {
    hello: 'world',
  }
})
