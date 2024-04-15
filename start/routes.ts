import { UserModel } from '#models/user';
import { listIndexes } from '#services/service'
import router from '@adonisjs/core/services/router'

const newUser = new UserModel({
  email: "user@example.com",
  username: "exampleUser",
  password: "examplePassword"
});

router.get('/', async () => {
  const collections = await listIndexes()
  try {
    await newUser.save()
  } catch (error) {
    console.log(error)
  }
  console.log("done")
  return {
    collections,
  }
})
