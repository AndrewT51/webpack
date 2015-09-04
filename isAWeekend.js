// function isTodayAWeekend(){
// 	var date = new Date();
// 	var day = date.getDay();
// 	if (day === 0 || day === 6){
// 		return true;		
// 	}
// 	return false;

// }

// var TODAY = 'Sturady';
// module.exports = isTodayAWeekend;

//console.log(isTodayAWeekend());

var isTodayAWeekend = {
	TODAY: function(){
		var date = new Date();
		var day = date.getDay();
		if (day === 0 || day === 6){
			return true;		
		}
		return false;

}
}

// var TODAY = 'Sturady';
module.exports = isTodayAWeekend;

//console.log(isTodayAWeekend());