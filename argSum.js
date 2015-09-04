

function argSum (){
	var result= 0;
	for (var i = 0 ; i < arguments.length ; i ++){
		result=result+arguments[i];
	}
	
	return result;
}
module.exports = argSum;
// console.log(argSum(2,4,6));