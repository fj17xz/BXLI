/* 导航栏，鼠标滑过二级导航栏使其背景颜色改变 */
var li1 = document.getElementById("li1");
var ul1 = document.getElementById("ul1");
var ulli1 = document.querySelectorAll("#ul1");
/* var ulli11 = ulli1.children; */
/* var ulli11 = ul1.getElementsByTagName("li"); */
var ulli11 = ul1.querySelectorAll("li");
/* console.log(ulli1);
console.log(ulli11); */

li1.onmouseover = function () {
    ul1.style.display = "block";
}
for (let i = 0; i < ulli11.length; i++) {
    for (let j = 0; j < ulli1.length; j++) {
        ulli1[j].onmouseover = function () {
            ulli1[j].style.display = "block";
        }
        ulli11[i].onmouseout = function () {
            ul1.style.display = "none";
        }
    }
    ulli11[i].onmouseover = function () {
        ulli11[i].style.background = "#CCC";
    }
    ulli11[i].onmouseout = function () {
        ulli11[i].style.background = "#fff";
    }
}
ul1.onmouseout = function () {
    ul1.style.display = "none";
}



var li2 = document.getElementById("li2");
var ul2 = document.getElementById("ul2");
var ulli2 = document.querySelectorAll("#ul2");
var ulli22 = ul2.querySelectorAll("li");
li2.onmouseover = function () {
    ul2.style.display = "block";
}
for (let i = 0; i < ulli22.length; i++) {
    for (let j = 0; j < ulli2.length; j++) {
        ulli2[j].onmouseover = function () {
            ulli2[j].style.display = "block";
        }
        ulli22[i].onmouseout = function () {
            ul2.style.display = "none";
        }
    }
    ulli22[i].onmouseover = function () {
        ulli22[i].style.background = "#CCC";
    }
    ulli22[i].onmouseout = function () {
        ulli22[i].style.background = "#fff";
    }
}
ul2.onmouseout = function () {
    ul2.style.display = "none";
}

var li3 = document.getElementById("li3");
var ul3 = document.getElementById("ul3");
var ulli3 = document.querySelectorAll("#ul3");
var ulli33 = ul3.querySelectorAll("li");
li3.onmouseover = function () {
    ul3.style.display = "block";
}
for (let i = 0; i < ulli33.length; i++) {
    for (let j = 0; j < ulli3.length; j++) {
        ulli3[j].onmouseover = function () {
            ulli3[j].style.display = "block";
        }
        ulli33[i].onmouseout = function () {
            ul3.style.display = "none";
        }
    }
    ulli33[i].onmouseover = function () {
        ulli33[i].style.background = "#CCC";
    }
    ulli33[i].onmouseout = function () {
        ulli33[i].style.background = "#fff";
    }
}
ul3.onmouseout = function () {
    ul3.style.display = "none";
}

/* 图片滑动 */
var banner1 = document.getElementById("banner1");
var img1 = banner1.querySelectorAll("img");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
/* console.log(btn33); */
/* 当点击按钮的时候，当前图片的层级=1，别的图片的层级=0 */
btn3.onclick = function () {
    console.log(2);
    img1.src = "images/banner1.jpg";
    console.log(img1.src);
    img1.src = "images/banner4.jpg";

    console.log(img1.src);
}


