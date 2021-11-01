function run() {
    console.log(1);
    let htmlCode = document.querySelector("#codeHTML").value;
    let cssCode = "<style>" + document.querySelector("#codeCSS").value + "</style>";
    let scriptCode = document.querySelector("#codeJs").value;
    let output = document.querySelector("#outputCode");
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(scriptCode);
}

document.querySelector("#codeHTML").addEventListener("keyup", run);
document.querySelector("#codeCSS").addEventListener("keyup", run);
document.querySelector("#codeJs").addEventListener("keyup", run);


// dieu chinh option




const changeStatusButtons = (obj) => {
    let element;

    if (obj.textContent.trim().toLowerCase() === "html") {
        element = document.querySelector('.item1');
    } else if (obj.textContent.trim().toLowerCase() === "css") {
        element = document.querySelector('.item2');
    } else if (obj.textContent.trim().toLowerCase() === "javascript") {
        element = document.querySelector('.item3');
    } else {
        element = document.querySelector('.item4');
    };


    if (obj.classList.contains("active")) {
        obj.classList.remove("active");
        obj.classList.add("white");

        element.style.display = "none";


    } else {
        obj.classList.remove("white");
        obj.classList.add("active");
        element.style.display = "block";
    }
    change();
}


function change() {

    var parentElm = document.getElementsByClassName('content__input');

    var buttonList = document.querySelectorAll("button");
    console.log(buttonList.length);
    let count = 0;

    for (let elm of buttonList) {
        if (elm.classList.contains("active")) {
            count++;
        }
        //alert(count);
    }
    console.log(count);
    if (count === 4) {
        parentElm[0].style.gridTemplateColumns = "1fr 1fr 1fr 1fr";

    } else if (count == 3) {
        parentElm[0].style.gridTemplateColumns = "1fr 1fr 1fr";

    } else if (count === 2) {
        parentElm[0].style.gridTemplateColumns = "1fr 1fr";
    } else if (count === 1) {
        parentElm[0].style.gridTemplateColumns = "1fr";
    }

};
change();