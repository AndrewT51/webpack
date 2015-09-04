var argSum =require('./argSum');

var readyToAdd = {
	splitSum: function (a,b){
		var result= 0;
		var newArr = a.split(b);
		for (var i = 0 ; i < newArr.length ; i ++){
			result=result+parseInt(newArr[i]);
		}
		return result;
	}
	
}
module.exports = readyToAdd;
//var readyToAdd = splitSum("3:4:5:6", ':');
//console.log(readyToAdd);

