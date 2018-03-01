var url = 'http://google.com';

function log(message){
	console.log(message);
}

module.exports.log = log;// exporting obj
// exporting func
// we can use below line also
// module.exports = log;
//module.exports.endPoint = url;