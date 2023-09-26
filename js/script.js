let op;
function res(){
		let result;
		let num1 = Number(document.getElementById('inp1').value);
		let num2 = Number(document.getElementById('inp2').value);
	switch(op) {
	case '+' :
		result = num1 + num2;
		break;
	case '-' :
		result = num1 - num2;
		break;
	case '/' :
		result = num1 / num2;
		break;
	case '*' :
		result = num1 * num2;
		break;
	}
        document.getElementById('result').innerHTML = result;
	}


	

