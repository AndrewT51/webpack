
function createArrayFromAtoB(lowNum,highNum){
	var finalArray = [];
	for (var i = lowNum; i <= highNum ; i ++){
		finalArray.push(i);
	}
	return finalArray;
}
module.exports = function (){return createArrayFromAtoB;};

//console.log(createArrayFromAtoB(3,9));