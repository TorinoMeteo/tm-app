import { Settings } from './Models'

var Realm = require('realm')

var Db = {}

export function initDb () {
  let realm = new Realm({
    schema: [Settings],
    schemaVersion: 6
  })
  Db.realm = realm

  /*
  realm.write(() => {
    realm.deleteAll()
  })
  */
}
export default Db
