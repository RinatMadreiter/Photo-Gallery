let images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/9.jpg', './img/10.jpg', './img/11.jpg', './img/12.jpg', './img/13.jpg', './img/14.jpg', './img/15.jpg', './img/16.jpg', './img/17.jpg', './img/18.jpg', './img/19.jpg', './img/20.jpg', './img/21.jpg'];
let i = 0;


function load() {
    for (i = 0; i < images.length; i++) {
        document.getElementById('allImg').innerHTML += `
        <img src="${images[i]}"  onclick="openImage(${i})" class="imgbox">
    `;
    }
}


/**
 * Open clicked Image in Fullsize
 * show fullImg and hide startpage
 * Render innerHTML Part
 * Check if first or last Image and hide arrow
 */
function openImage(imgNumber) {
    showFullImg();
    openImageHTML(imgNumber);
    checkFirstOrLast(imgNumber);
}


/**
 * hide fullImg and show startpage
 */
function backToStartpage() {
    document.getElementById('fullImgDiv').classList.add('hide');
    document.getElementById('allImg').classList.remove('hide');
}

 
/**
 * Render innerHTML Part of openImage 
 */
function openImageHTML(imgNumber) {
    document.getElementById('fullImgDiv').innerHTML = `
    <div class="viewImgParent">
        <img class="arrowLeft arrows" onclick="openImage(${imgNumber - 1})" id="leftArrow" src="./img/previous.png">
        <img class="arrowRight arrows" onclick="openImage(${imgNumber + 1})" id="rightArrow"  src="./img/next.png">
        <header class="viewHeader">
            <a class="back" onclick="backToStartpage()">
            <img src="./img/back.png">
            <span>Zurück</span>
            </a>
        </header> 
        <img src="${images[imgNumber]}" class="viewImg" id="shownImg">
    </div>
    `;
}


/** 
* Check if first or last Image and hide arrow 
*/
function checkFirstOrLast(imgNumber) {
    if (imgNumber == 0) {
        document.getElementById('leftArrow').classList.add('hide');
    }
    if (imgNumber == 20) {
        document.getElementById('rightArrow').classList.add('hide');
    }
}


/**
 * show fullImg and hide startpage
 */

function showFullImg() {
    document.getElementById('fullImgDiv').classList.remove('hide');
    document.getElementById('allImg').classList.add('hide');
}