
var myStuff = [20, "hat", "pow", 5];
myStuff[1] = "cat";
myStuff[2] = myStuff[1];
myStuff[0] = myStuff[3] + 10;
myStuff[3] = myStuff[0] + myStuff[0];


console.log(length(myStuff));
appendItem(myStuff, "test");
console.log(myStuff.length);

console.log(myStuff);
removeItem(myStuff, 3);
console.log(myStuff.length);

insertItem(myStuff, 1, "dog");

console.log(myStuff);


/*
var myStuff = ["dog","cat",3,10];
myStuff[2-1] = "tree";
myStuff[myStuff[2]] = myStuff[0];
console.log(myStuff);
*/
/*
var aList = [20,"hat","pow"];
appendItem(aList, 5);
appendItem(aList, 10);
removeItem(aList, 1);
insertItem(aList, 2, "bang");

console.log(aList);
*/

function appendItem(_a, _item) {
	_a.length = _a.length+1;
	_a[_a.length-1] = _item;
}

function removeItem(_a, _i) {
	if (_i >= _a.length || _i === 0) {
		console.log("Index out of range.");
		return
	}
	var count = _i;
	while (count < _a.length-1) {
		_a[count] = _a[count+1];
		count++;
	}
	_a.length = _a.length-1;
}

function insertItem(_a, _i, _item) {
	if (_i >= _a.length || _i === 0) {
		console.log("Index out of range.");
		return
	}

	_a.length = _a.length+1;
	var count = _a.length-1;

	while (count > _i) {
		_a[count] = _a[count-1];
		count--;
	}

	_a[_i] = _item;
	
}

// this function is redundant with built in array.length function
function length(_a) {
	var count = 0;
	while (_a[count] != null) {
		count++;
	}

	return count;
}
