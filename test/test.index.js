const chai = require('chai');
const expect = chai.expect;

const serializer = require('../lib');


const type = 'people';

const fakePerson = {
  id: 1,
  firstName: 'mike',
  lastName: 'fakeman'
};

const fakePeople = [{
  id: 1,
  firstName: 'mike',
  lastName: 'fakeman'
}, {
  id: 2,
  firstName: 'Liz',
  lastName: 'Fakeman'
}];


describe('serializer object', function() {
  it('is an object', function() {
    expect(serializer).to.be.an('object');
  });
  it('has a serialize method', function() {
    expect(serializer.serialize).to.be.a('function');
  });
  it('has a serializeObject method', function() {
    expect(serializer.serializeObject).to.be.a('function');
  });
  it('has a serializeArray method', function() {
    expect(serializer.serializeArray).to.be.a('function');
  });
});

describe('serialize.serializeObject', function() {
  it('returns an error when you give it an array', function() {
    let error = serializer.serializeObject(fakePeople, type);
    expect(error).to.be.an('Error');
  });
  it('returns an error when you do not provide type', function() {
    let error = serializer.serializeObject(fakePerson);
    expect(error).to.be.an('Error');
  });
  it('returns the serialized object', function() {
    let serialized = serializer.serializeObject(fakePerson, type);
    expect(serialized).to.be.an('object');
    expect(serialized.type).to.equal(type);
    expect(serialized.id).to.equal(fakePerson.id);
    expect(serialized.attributes.firstName).to.equal(fakePerson.firstName);
    expect(serialized.attributes.lastName).to.equal(fakePerson.lastName);
  });
});

describe('serialize.serializeArray', function() {
  it('returns an error when you dont give it an array', function() {
    let error = serializer.serializeArray(fakePerson, type);
    expect(error).to.be.an('Error');
  });
  it('returns an error when you do not provide type', function() {
    let error = serializer.serializeArray(fakePeople);
    expect(error).to.be.an('Error');
  });
  it('returns the serialized array', function() {
    let serialized = serializer.serializeArray(fakePeople, type);
    expect(serialized).to.be.an('array');
    expect(serialized.length).to.equal(fakePeople.length);
    expect(serialized[0].id).to.equal(fakePeople[0].id);
    expect(serialized[0].attributes.firstName).to.equal(fakePeople[0].firstName);
    expect(serialized[0].attributes.lastName).to.equal(fakePeople[0].lastName);
    expect(serialized[1].id).to.equal(fakePeople[1].id);
    expect(serialized[1].attributes.firstName).to.equal(fakePeople[1].firstName);
    expect(serialized[1].attributes.lastName).to.equal(fakePeople[1].lastName);
  });
});

describe('serializer.serialize', function() {
  it('returns an error if no data is provided', function() {
    let error = serializer.serialize(null, type);
    expect(error).to.be.an('Error');
  });
  it('returns an error if no type is provided', function() {
    let error = serializer.serialize(fakePeople);
    expect(error).to.be.an('Error');
  });

  it('returns the serialized array.', function() {
    let serialized = serializer.serialize(fakePeople, type);
    expect(serialized).to.be.an('array');
    expect(serialized.length).to.equal(fakePeople.length);
    expect(serialized[0].id).to.equal(fakePeople[0].id);
    expect(serialized[0].attributes.firstName).to.equal(fakePeople[0].firstName);
    expect(serialized[0].attributes.lastName).to.equal(fakePeople[0].lastName);
    expect(serialized[1].id).to.equal(fakePeople[1].id);
    expect(serialized[1].attributes.firstName).to.equal(fakePeople[1].firstName);
    expect(serialized[1].attributes.lastName).to.equal(fakePeople[1].lastName);
  });
  it('returns the serialized object', function() {
    let serialized = serializer.serialize(fakePerson, type);
    expect(serialized).to.be.an('object');
    expect(serialized.type).to.equal(type);
    expect(serialized.id).to.equal(fakePerson.id);
    expect(serialized.attributes.firstName).to.equal(fakePerson.firstName);
    expect(serialized.attributes.lastName).to.equal(fakePerson.lastName);
  });
});