/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var result;

	//--------------------------------------------------------
	// 1. argsSum()
	// Takes N arguments, and should work on any number of arguments
	//--------------------------------------------------------

	var argSum = __webpack_require__(1);
	result = argSum(3,7,8);
	console.log(result); // 18
	result = argSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	console.log(result); // 14

	//--------------------------------------------------------
	// 2. splitSum()
	// Takes 2 arguments
	//--------------------------------------------------------

	var splitSum = __webpack_require__(4).splitSum;
	result = splitSum("3:4:5:1", ":");
	console.log(result); // 13
	result = splitSum("-1$-5$5$-4", "$");
	console.log(result); // -5

	//--------------------------------------------------------
	// 3. createArray()
	// Takes 2 arguments
	//--------------------------------------------------------

	var createArrayFromAtoB = __webpack_require__(2)();
	result = createArrayFromAtoB(4, 9);
	console.log(result); // [4, 5, 6, 7, 8, 9]
	result = createArrayFromAtoB(-1, 3);
	console.log(result); // [-1, 0, 1, 2, 3]

	//--------------------------------------------------------
	// 4. isTodayAWeekend()
	// Takes no arguments
	//--------------------------------------------------------

	var isTodayAWeekend = __webpack_require__(3)["TODAY"];

	result = isTodayAWeekend();
	console.log(result);
	// It will return true if today is Saturday or Sunday, otherwise, false

/***/ },
/* 1 */
/***/ function(module, exports) {

	

	function argSum (){
		var result= 0;
		for (var i = 0 ; i < arguments.length ; i ++){
			result=result+arguments[i];
		}
		
		return result;
	}
	module.exports = argSum;
	// console.log(argSum(2,4,6));

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	function createArrayFromAtoB(lowNum,highNum){
		var finalArray = [];
		for (var i = lowNum; i <= highNum ; i ++){
			finalArray.push(i);
		}
		return finalArray;
	}
	module.exports = function (){return createArrayFromAtoB;};

	//console.log(createArrayFromAtoB(3,9));

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var argSum =__webpack_require__(1);

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



/***/ }
/******/ ]);