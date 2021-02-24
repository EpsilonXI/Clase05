
function loadAjax (){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){

    console.log(this.status);
    if(this.readyState == 4 && this.status == 200){
        document.getElementById("texto").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "ajaxExample.txt");
xhttp.send();
}
