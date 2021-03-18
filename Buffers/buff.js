var buffer = require('buffer');

//Create a buffer with length 256
const buf = Buffer.alloc(26);

//Create a buffer with length 10 
// filled with bytes which all have the value '1'
const buff2 = Buffer.alloc(10,1);

//Create am uninitiallized buffer of length 10
//This is faster than calling buffer.alloc() but
// the returned Buffer instance might not contain old data that needs to be 
//overwritten using fill(), write() or other functions fill the Buffer's contents.
const buff3=Buffer.allocUnsafe(10);

//Creates a Buffer containing the bytes [1,2,3,4].
const buf4= Buffer.from([1,2,3,4]);

//Creates a Buffer containing the bytes [1,1,1,1] - the entries 
// all are truncated using '(value & 255)' to fit into rage 0-255
const buf5=Buffer.from([257,257.5,-255,'1']);

//Creates a Buffer containing the UTF-8 encoded bytes for the string 'test':
//[0x74,....] in hexadecimal notation
//[116,...] in decimal notation
const buf6= Buffer.from('test');

//Creates a Buffer containing the Latin-1 bytes [0x74,....]
const buf7=Buffer.from('test','latin1');

//Write a buffer
length = buf.write("Simple easy Learning");

console.log("Octets written: "+ length);

console.log(buf.toJSON(buf));

