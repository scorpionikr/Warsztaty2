/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener("DOMContentLoaded", function(){

    const tooltips = document.querySelectorAll(".tooltip");

// console.log(tooltips)


    for (let i=0; i <tooltips.length; i++) {
        tooltips[i].addEventListener("mouseover", function(){
                let string = tooltips[i].dataset["text"]
                const toadd = document.createElement("span");
                toadd.className = "tooltipText"
                toadd.innerText = string
                this.appendChild(toadd);
        });
        tooltips[i].addEventListener("mouseout", function(){
                const toDelete = this.firstElementChild;
                toDelete.parentElement.removeChild(toDelete);
                // console.log(toDelete)
        });
    }

});
