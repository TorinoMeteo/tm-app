import Db from './'

const SettingsSchema = {
  name: 'Settings',
  primaryKey: 'id',
  properties: {
    id: { type: 'int', default: 1 },
    favouriteStation: { type: 'int', optional: true },
    favouriteWebcam: { type: 'int', optional: true },
    offlineInterval: { type: 'int', default: 30 }
  }
}

export class Settings {
  get () {
    let settings = Db.realm.objects('Settings').filtered('id=1')
    return settings
  }

  insertStation (id) {
    Db.realm.write(() => {
      Db.realm.create('Settings', { id: 1, favouriteStation: id })
    })
  }

  updateStation (id) {
    Db.realm.write(() => {
      Db.realm.create('Settings', { id: 1, favouriteStation: id }, true)
    })
  }

  updateOfflineInterval (interval) {
    Db.realm.write(() => {
      Db.realm.create('Settings', { id: 1, offlineInterval: interval }, true)
    })
  }
}

Settings.schema = SettingsSchema
