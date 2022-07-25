/**
 * 
 * Class ( 08 )
 * Enum Data Type
 * -- Enum Type: no duplicate data, helps to store constants
 * -- Duplicate value is not allowed here
 *
 * Enum Types
 * 1. Numeric
 * 2. String
 * 3. Hetergenous
 * 
 */

// Numeric enum
enum RequestType {
  readData = 1,
  saveData = 3,
  deleteData,
}

// console.log(RequestType);
console.log(RequestType.readData);
console.log(RequestType["saveData"]);

// String enum
enum RequestType2 {
  readData = "READ_DATA",
  deleteData = "DELETE_DATA",
}

console.log(RequestType2);

// Hetergenous enum
enum RequestType3 {
  readData = "READ_DATA",
  deleteData = "DELETE_DATA",
  userId = 101
}

console.log(RequestType3);