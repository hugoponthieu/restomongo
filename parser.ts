import * as mongodb from 'mongodb'

interface Establishment {
  [key: string]: string
}

function scrapeJSON(data: any[]): Establishment[] {
  const establishmentsData: Establishment[] = []
  for (const features of data) {
    const establishment: Establishment = {}
    console.log(features)
    const tags = features.properties.tags.split(', "')
    const tagsDict: { [key: string]: string } = {}
    for (const tag of tags) {
      const [key, value] = tag.replace(/"/g, '').split('=>')
      tagsDict[key] = value
    }
    Object.assign(establishment, tagsDict)

    establishmentsData.push(establishment)
  }
  return establishmentsData
}

async function main() {
  const filePath =
    'https://data.montpellier3m.fr/sites/default/files/ressources/OSM_Metropole_restauration_bar.json'
  const datas = await fetch(filePath).then((response) => {
    return response.json()
  })

  const establishmentsData = await scrapeJSON(datas.features)

  const client = new mongodb.MongoClient('mongodb://localhost:30000/')
  await client.connect()
  const db = client.db('restaurants')

  // Insérer les données dans la base de données MongoDB
  for (const establishment of establishmentsData) {
    // Extraire la valeur du champ "amenity"
    const amenity = establishment['amenity']
    // Supprimer le champ "amenity" pour ne pas le réinsérer dans la base de données
    delete establishment['amenity']
    // Insérer l'établissement dans la collection correspondante
    await db.collection(amenity).insertOne(establishment)
  }

  await client.close()
}

main().catch(console.error)
