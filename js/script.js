/*Jose and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.
To tip the waiter a fair amount, Jose created a simple tip calculator
(as a function). He likes to tip 20% of the bill when the bill is less than
$50, 15% when the bill is between $50 and $200, and 10% if the bill is more than
$200.

In the end, Jose would like to have 2 arrays:
1) Containing all 3 tips (1 from each bill)
2) Containing all 3 final paid amounts (bill + tip).
(Note: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

const bills = [];
let tips = [];
let finalBills = [];
var tip, finalBill,i=0;


for(let i=0; i<bills.length; i++){
	if(bills[i] < 50){
		tip = bills[i] * 0.2;
	}else if(bills[i] > 50 && bills[i] <200){
		tip = bills[i] * 0.15;
	}else{
		tip = bills[i] * 0.10;
	}
	finalBill = tip + bills[i];
	tips.push(tip);
	finalBills.push(finalBill);
}

console.log(tips);
console.log(finalBills);

function getBill(){
	bills[i] = Number(document.getElementById("bill").value);
	i++

	document.getElementById("showBill").value = bills;
	console.log(bills);
}

let btn1 = document.getElementById("addBill");
btn1.addEventListener("click", getBill);