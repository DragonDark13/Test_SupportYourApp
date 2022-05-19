const imageNodeList = document.getElementsByClassName("bg_block");
const imageArray = Array.from(imageNodeList)
const timeOut = 10000;  /*10s*/
let randomNumber = Math.floor(Math.random() * imageArray.length);
let localStorageImageNumber = Number(localStorage.currentImage);

let nextElem = (index) => {

    localStorage.setItem('currentImage', index);

    let fromHideToShow = (elem) => {
        elem.classList.remove("fadeOut");
        elem.classList.add("fadeIn");
    };

    let fromShowToHide = (elem) => {
        elem.classList.remove("fadeIn")
        elem.classList.add("fadeOut")
    }

    if (index === 0) {
        fromHideToShow(imageArray[index])

        setTimeout(() => {
            nextElem(index + 1)
        }, timeOut)

    } else {

        fromShowToHide(imageArray[index - 1]);

        fromHideToShow(imageArray[index])


        if (index < imageArray.length - 1) {
            setTimeout(() => {
                nextElem(index + 1)
            }, timeOut)
        } else {
            setTimeout(() => {
                // to first number
                fromShowToHide(imageArray[imageArray.length - 1]);
                nextElem(0)
            }, timeOut)
        }
    }
}


nextElem(localStorageImageNumber ? localStorageImageNumber : randomNumber)