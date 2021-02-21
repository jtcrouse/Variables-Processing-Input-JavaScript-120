var bill_total=Number(prompt("What is your bill total?"));
var taxed_bill=Number(bill_total+(bill_total*0.07));
var tip=Number(taxed_bill*0.05);
var final_bill=Number(taxed_bill+tip);
document.body.querySelector(".message").innerHTML="Your final bill is $"+final_bill+".";