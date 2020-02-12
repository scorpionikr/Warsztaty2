/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function(){

    const tablicazdj = document.querySelector(".gallery").querySelectorAll( "ul li")
    const main = document.querySelector("body");
    // console.log(main)

    tablicazdj.forEach(function(elem){
        elem.addEventListener("click", function(){
            let attrr = this.firstChild.getAttribute("src")
            let button1 = addel(attrr);
            remel(button1)
        });

        function addel(atrib) {
            const toadd = document.createElement("div");
            toadd.className = "fullScreen"
            main.appendChild(toadd);
            const toadd1 = document.createElement("img");
            toadd1.setAttribute("src", atrib)
            toadd.appendChild(toadd1);
            const toadd2 = document.createElement("button");
            toadd2.classList.add("close")
            toadd2.innerText = "close"
            toadd.appendChild(toadd2);
            return toadd2;
        }

        function remel(button) {
            button.addEventListener("click", function () {
                const toDelete = this.parentElement;
                toDelete.parentElement.removeChild(toDelete);
                console.log(toDelete)
            });
        }

    });

});