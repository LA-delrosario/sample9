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
var tip, finalBill,i=0,totalTips = 0, totalFinalBills = 0;

console.log(tips);
console.log(finalBills);

function getBill(){
	console.log(i);
	bills[i] = Number(document.getElementById("bill").value);
	i++;
	
	tips = [];
	finalBills = [];

	document.getElementById("showBill").value = bills;
	console.log(bills);
	document.getElementById("bill").value = "";

	for(let x=0; x<bills.length; x++){
		if(bills[x] <= 50){
			tip = bills[x] * 0.2;
			tips.push(tip);
		}else if(bills[x] > 50 && bills[x] <= 200){
			tip = bills[x] * 0.15;
			tips.push(tip);
		}else{
			tip = bills[x] * 0.10;
			tips.push(tip);
	}
	finalBill = tip + bills[x];
	totalFinalBills += finalBill;
	totalTips += tip;
	finalBills.push(finalBill);
	}
	document.getElementById("tip-list").innerHTML= tips.join('<br>');
	document.getElementById("final-list").innerHTML = finalBills.join('<br>');
	document.getElementById("totalTip").innerHTML = "Total: " + totalTips;
	document.getElementById("totalFinal").innerHTML = "Total: " + totalFinalBills;
}

let btn1 = document.getElementById("addBill");
btn1.addEventListener("click", getBill);