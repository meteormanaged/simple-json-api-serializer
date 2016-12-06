function serializeObject(obj, type) {
  if (obj !== Object(obj) || Array.isArray(obj)) {
    return Error('Data other than an object was given to serializeObject method.');
  }
  if (!type) {
    return Error('No type was provided to serializeObject method.');
  }
  let keys = Object.keys(obj);
  let serialized = {};
  serialized.type = type.toLowerCase();
  serialized.id = obj.id;
  serialized.attributes = {};
  keys.forEach((key) => {
    if (key !== 'id') {
      serialized.attributes[key] = obj[key];
    }
    
  });
  return serialized;

}

function serializeArray(array, type) {
  if (!array) {
    return Error('No data was provided to serializeArray method.');
  }
  if (!Array.isArray(array)) {
    return Error('Data given to serializeArray is not an array.');
  }
  if (!type) {
    return Error('No type was provided to serializeArray method.');
  }
  return array.map((obj) => serializeObject(obj, type));
}

function serialize(raw, type) {
  if (!raw) {
    return Error('No data was provided.');
  }
  if (!type) {
    return Error('No type was provided.');
  }
  if (Array.isArray(raw)) {
    return serializeArray(raw, type);
  } else {
    return serializeObject(raw, type);
  }
}

module.exports =  {
  serializeObject,
  serializeArray,
  serialize
};