const fs = require('fs');
var data = '';

//Create readable stream
var readerStream = fs.createReadStream('input.txt');

//Set the encoding to be utf-8
readerStream.setEncoding('UTF-8');

//Handle stream events --> data, end and error
readerStream.on('data',function(chunk){
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error',function(){
    console.log(error);
});



//Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

//Write the data to stream with encoding to be utf-8
writerStream.write(data,'UTF-8');

//Mark the end of file
writerStream.end();

//Handle stream events --> finish, and error
writerStream.on('finish',function(){
    console.log('Write Completed....');
});

writerStream.on('error',function(error){
    console.log(error.stack);
});


//Pipe the read and write operations
//read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log('\n Program End \n');