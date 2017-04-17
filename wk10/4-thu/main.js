console.log('connected');


function romanize () {
    var num = document.querySelector(".number").value;
    debugger;
    if (!+num){
      return false;
    }
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--){
      roman += (key[+digits.pop() + (i * 10)] || "");
    }
    console.log(Array(+digits.join("") + 1).join("M") + roman);
}
