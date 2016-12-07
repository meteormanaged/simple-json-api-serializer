[![Build Status](https://travis-ci.org/meteormanaged/simple-json-api-serializer.svg?branch=master)](https://travis-ci.org/meteormanaged/simple-json-api-serializer)

# simple-json-api-serializer

Simple JSON-API serializer for records.

## Usage

    const serializer = require('simple-json-api-serializer');
	serializer.serialize(data, type);

Require package, provide a record/records and type, be returned serialized documents.

Serialize a single object.

	const serializer = require('simple-json-api-serializer');


	const fakePerson = {
	  id: 1,
	  firstName: 'mike',
	  lastName: 'fakeman'
	};
	const type = 'people';

	serializer.serialize(fakePerson, type);

	
    // { 
    //		type: 'people',
    //		id: 1,
    //		attributes: { 
    //			firstName: 'mike', 
    //			lastName: 'fakeman' 
    //		} 
    //	}


Serialize an array of objects.

	const serializer = require('simple-json-api-serializer');
	
	const fakePeople = [{
		  id: 1,
		  firstName: 'mike',
		  lastName: 'fakeman'
		}, {
		  id: 2,
		  firstName: 'Liz',
		  lastName: 'Fakeman'
		}];
	
	cosnt type = 'people';

	serializer.serialize(fakePeople, type);


    //	[{ 
    //		type: 'people',
    //		id: 1,
    //    	attributes: { 
    //				firstName: 'mike', 
    //				lastName: 'fakeman' 
    //			} 
    //		},
    // 	{ 
    //		type: 'people',
    //		id: 2,
    // 		attributes: { 
    //				firstName: 'Liz', 
    //				lastName: 'Fakeman' 
    //   		} 
    //	}]

## Testing

    //  Clone the repository.
    user@localhost:~$ git clone git@github.com:meteormanaged/simple-json-api-serializer.git
    // Change to directory.
    user@localhost:~$ cd simple-json-api-serializer/
    // Install dev dependencies.
    user@localhost:~/simple-json-api-serializer$ npm install
    // Run test and coverage.
    user@localhost:~/simple-json-api-serializer$ npm test

