import baseInstance from "../data/instances/base.json";
import instancesData from "../data/instances/instances.json";

function testForAllIncludedKeys() {
  const checkProps = (instanceObject) =>
    getSchemaFields(instanceObject, []).sort().join(',') ===
    getSchemaFields(baseInstance[0], []).sort().join(',')

  const allKeysExist = instancesData.every(checkProps)

  expect(allKeysExist).toBe(true);
}

test('check if keys exist on all instances', testForAllIncludedKeys)

function getSchemaFields(schema, result) {
  if (Array.isArray(schema)) {
    for (let i = 0; i < schema.length; i++) {
      getSchemaFields(schema[i], result);
    }
  } else {
    for (let prop in schema) {
      result.push(prop);
      if (typeof schema[prop] == 'object' || Array.isArray(schema[prop])) {
        getSchemaFields(schema[prop], result);
      }
    }
  }
  return result;
}