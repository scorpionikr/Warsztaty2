document.addEventListener("DOMContentLoaded", function(){

    const tablelists = document.querySelector("div").firstElementChild.children;
    const insert = document.querySelector("#tagInput");
    const show = document.querySelector("#showButton");
    const hide = document.querySelector("#hideButton");
    // console.log(tablelists)
    // console.log(insert)
    // console.log(show)
    // console.log(hide)
    for (let i=0; i <tablelists.length; i++) {
      tablelists[i].addEventListener("mouseover", function(){
        let under = this.querySelector("ul");
        if (under != null) {
            // console.log(under)
            // console.log("mysza nad")
            under.style.display = "block";
        }

     });
      tablelists[i].addEventListener("mouseout", function(){
        let under = this.querySelector("ul");
        if (under != null) {
            // console.log(under)
            // console.log("mysza out")
            under.style.display = "none";
        }
      });
    }

});
