# simple-json-serializer

Simple JSON-API serializer for records.

## Usage

	serialize.serialize(data, type);

Require package, provide a record/records and type, be returned serialized documents.

Serialize a single object.

	const serializer = require('simple-json-serializer');


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

	const serializer = require('simple-json-serializer');
	
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


