import { dbResto } from '#config/mongo'

export async function listIndexes() {
  return await dbResto.listCollections().toArray()
}
