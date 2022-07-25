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
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
console.log(RequestType.readData);
console.log(RequestType["saveData"]);
// String enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
// Hetergenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "READ_DATA";
    RequestType3["deleteData"] = "DELETE_DATA";
    RequestType3[RequestType3["userId"] = 101] = "userId";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
