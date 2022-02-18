var x = 0;
var count = 0;

while (count < 10) {
	if (x === 0) { /* what happens if we say x === "0" ? */
		console.log("x is exactly 0!");
		count++;
		x = count;
	} else {
		printVar(x);
		count++;
		x = count;
	}
}


function printVar(_x) {
	console.log(_x);
	return
}
