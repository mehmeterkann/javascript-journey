const input = document.getElementById("input");
let output = document.getElementById("output");

function reverse(text){
    return text.split("").reverse().join("")
}


function check(){
    const value = input.value.toLowerCase();

    if (value==reverse(value)){
        output.textContent=`${input.value} is palindrome`
    }
    else{
        output.textContent=`${input.value} is NOT palindrome`
    }
}