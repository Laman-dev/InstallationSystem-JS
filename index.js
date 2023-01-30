console.log("Hello");
function run(){
    let price =Number(document.getElementById("input1").value)
    let downpayment = Number(document.getElementById("input2").value)
    let ye= Number(document.getElementById("input3").value)
    amount=price*downpayment/100
    current=amount+price
    document.getElementById("Cammount").innerHTML=current
    months = ye * 12
    installment = current / months
    document.getElementById("installment").innerHTML=installment

}