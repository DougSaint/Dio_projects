const cNumberWrapper = document.getElementById("currentNumber");
var cNumber = 0;

function	increment(){
	cNumber += 1;
	cNumberWrapper.innerHTML= cNumber;
	if(cNumber === 10){
		cNumber = 0;
	}
}

function	decrement(){
	cNumber -= 1;
	cNumberWrapper.innerHTML= cNumber;
	if(cNumber === -10){
		cNumber = 0;
	}
}
