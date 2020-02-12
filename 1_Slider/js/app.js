document.addEventListener("DOMContentLoaded", function(){

    const next = document.querySelector("#nextPicture");
    const prev = document.querySelector("#prevPicture");
    const tablicazdj = document.querySelector(".slider").querySelectorAll( "ul li")
    let indexzdj = 0;


    next.addEventListener("click", function() {

        tablicazdj[indexzdj].classList.remove("visible")
        if (indexzdj >= tablicazdj.length-1) {
            indexzdj =0;
        } else {
            indexzdj +=1;
        }
        tablicazdj[indexzdj].classList.toggle("visible")

        console.log(indexzdj)
    })
    prev.addEventListener("click", function() {

            tablicazdj[indexzdj].classList.remove("visible")
              if (indexzdj <= 0) {
                indexzdj = tablicazdj.length-1
             }    else {
                 indexzdj -= 1;
             }
            tablicazdj[indexzdj].classList.toggle("visible")
        console.log(indexzdj)
    })
});
