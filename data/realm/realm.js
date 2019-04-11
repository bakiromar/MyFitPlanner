import Realm from 'realm';

let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath);
while (nextSchemaIndex < schemas.length) {
  const migratedRealm = new Realm({...schemas[nextSchemaIndex++]});
  migratedRealm.close();
}

export default new Realm(schemas[schemas.length - 1]);