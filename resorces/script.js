let num;
document.getElementById("submit_1").onclick = function(){
    num = document.getElementById("type").value;
    if (num % 2 === 1) {
        document.write("ODD")
    }else if(num % 2 === 0){
        document.write("EVEN")
    }else{
        document.write("Type a valid number")
    }
}
document.getElementById("submit_2").onclick = function() {
    num = document.getElementById("grade").value;
    if ( num < 33 ) {
        document.write("F")
    }else if( num >= 33 && num < 40 ){
        document.write("D")
    }else if( num >= 40 && num < 50 ){
        document.write("C")
    }else if( num >= 50 && num < 60 ){
        document.write("B")
    }else if( num >= 60 && num < 70 ){
        document.write("A-")
    }else if( num >= 70 && num < 80 ){
        document.write("A")
    }else if( num >= 80 && num < 100 ){
        document.write("A+")
    }else{
        document.write("Type a valid number")
    }
}