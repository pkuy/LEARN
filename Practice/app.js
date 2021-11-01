/** 
document.
getElementById("button__1")
    .addEventListener("click", changeColor);

function changeColor() {

    var pvalue = document.getElementsByTagName('body')[0];
    var colorValue = document.getElementsByTagName("input")[0]
    var att = document.createAttribute("class");
    att.value = "cblue";
    pvalue.setAttributeNode(att);
}

document.
getElementById("button__2")
    .addEventListener("click", changeColor2);


function changeColor2() {

    var pvalue = document.getElementsByTagName('body')[0];
    var colorValue = document.getElementsByTagName("input")[0]
    var att = document.createAttribute("class");
    att.value = "cwhite";
    pvalue.setAttributeNode(att);
}
*/



document.
getElementById("button__1")
    .addEventListener("click", changeColor);

function changeColor() {

    var pvalue = document.getElementsByTagName('body')[0];
    var inputColor = document.getElementById("color").value;
    console.log(inputColor);

}