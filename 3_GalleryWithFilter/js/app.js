document.addEventListener("DOMContentLoaded", function(){

    const tablicazdj = document.querySelector("#gallery").getElementsByTagName("img");
    const insert = document.querySelector("#tagInput");
    const show = document.querySelector("#showButton");
    const hide = document.querySelector("#hideButton");
    // console.log(tablicazdj)
    // console.log(insert)
    // console.log(show)
    // console.log(hide)

    show.addEventListener("click", function(){

        let zm = insert.value;
        insert.value = '';
        for (let i=0; i <tablicazdj.length; i++) {
            let string = tablicazdj[i].dataset["tag"]
            let spr = string.indexOf(zm)
            if (spr != -1) {
                 tablicazdj[i].classList.remove("invisible")
            }
            spr = ' ';
        }
    });

    hide.addEventListener("click", function(){
        let zm = insert.value;
        insert.value = '';
        for (let i=0; i <tablicazdj.length; i++) {
            let string = tablicazdj[i].dataset["tag"]
            let spr = string.indexOf(zm)
            if (spr != -1) {
                tablicazdj[i].classList.add("invisible")
            }
            spr = ' ';
        }
    });

});