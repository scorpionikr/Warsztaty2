/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function(){

    const tablicazdj = document.querySelector(".gallery").querySelectorAll( "ul li")
    const main = document.querySelector("body");

    for (let i=0; i < tablicazdj.length; i++) {
        tablicazdj[i].addEventListener("click", function () {
            let attrr = this.firstChild.getAttribute("src")
            let elem = addel(attrr);
            let buttonp = elem.querySelector(".fa-arrow-circle-left")
            let buttonn = elem.querySelector(".fa-arrow-circle-right")
            let buttonc = elem.querySelector(".close")
            // let pic = elem.querySelector("img")
            remel(buttonc)
            moveel(buttonn, buttonp, i);
        });
    }

    for (let i=0; i < tablicazdj.length; i++) {
        tablicazdj[i].addEventListener("mouseover", function () {
            let attrr = this.firstElementChild
            console.log(attrr)

        });
    }

    function addel(atrib) {
            const toadd = document.createElement("div");
            toadd.className = "fullScreen"
            main.appendChild(toadd);
            const toadd4 = document.createElement("i");
            toadd4.classList.add("fas");
            toadd4.classList.add("fa-arrow-circle-left");
            toadd.appendChild(toadd4);
            const toadd1 = document.createElement("img");
            toadd1.setAttribute("src", atrib)
            toadd.appendChild(toadd1);
            const toadd3 = document.createElement("i");
            toadd3.classList.add("fas");
            toadd3.classList.add("fa-arrow-circle-right");
            toadd.appendChild(toadd3);
            const toadd2 = document.createElement("i");
            toadd2.classList.add("close")
            toadd2.classList.add("fas");
            toadd2.classList.add("fa-times-circle");
            toadd.appendChild(toadd2);
            return toadd;
        }

        function remel(button) {
            button.addEventListener("click", function () {
                const toDelete = this.parentElement;
                toDelete.parentElement.removeChild(toDelete);
                console.log(toDelete)
            });
        }

        function moveel (button, button1, index) {
            button.addEventListener("click", function () {
                let newattr = tablicazdj[index+1].querySelector("img").getAttribute("src")
                // console.log(tablicazdj[index+1].querySelector("img").getAttribute("src"))
                this.parentElement.querySelector("img").setAttribute("src", newattr)
                index = index +1;
                return index;
            })
            button1.addEventListener("click", function () {
                let newattr = tablicazdj[index-1].querySelector("img").getAttribute("src")
                // console.log(tablicazdj[index-1].querySelector("img").getAttribute("src"))
                this.parentElement.querySelector("img").setAttribute("src", newattr)
                index = index -1;
                return index;
            })
        }

});