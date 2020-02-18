    document.addEventListener("DOMContentLoaded", function(){

        const tasklist = document.querySelector("#taskList");
        const tasklists = document.querySelector("#taskList").children;
        const buttonadd = document.querySelector("#addTaskButton");
        const toaddin = document.querySelector("#taskInput")
        const buttonfin = document.querySelector("#removeFinishedTasksButton")
        const counter = document.querySelector("#counter")



       buttonadd.addEventListener("click", function(){
                let string = toaddin.value;
                if (string.length >= 5 ) {
                    add(string);
                    toaddin.value = " ";
                } else {
                    alert ("Tekst ma mniej niz 5 znakow. Nie moge wprowadzic!")
                }

                 for (let i = 0; i <tasklists.length; i++) {
                     let buttonrem = tasklists[i].childNodes[1]
                     let buttoncomp = tasklists[i].childNodes[2]
                     remove(buttonrem);
                     complete(buttoncomp);
                     finished(buttonfin);
                 }
            });

        function add (toadded) {
            const toadd = document.createElement("li");
            tasklist.appendChild(toadd);
            const toadd2 = document.createElement("p");
            toadd2.innerText = "Task " + tasklists.length + " - " + toadded ;
            toadd.appendChild(toadd2);
            const toadd3 = document.createElement("button")
            toadd3.innerText = "Delete"
            toadd.appendChild(toadd3);
            const toadd4 = document.createElement("button")
            toadd4.innerText = "Complete"
            toadd.appendChild(toadd4);
            if (tasklists.length != null) {
                counter.innerText = tasklists.length;
            } else {
                counter.innerText = 0;
            }
            if (tasklists.length % 2 !=0) {
                toadd.style.backgroundColor = "lightgrey";
             }
        }

        function remove (button) {
            button.addEventListener("click", function() {
                    // console.log("usuwam")
                    const toDelete = this.parentElement;
                    // console.log(toDelete)
                    toDelete.parentElement.removeChild(toDelete);
                    if (tasklists.length != null) {
                        counter.innerText = tasklists.length;
                    } else {
                        counter.innerText = 0;
                    }
            })
        }

        function complete (button) {
            button.addEventListener("click", function(){
                console.log("ustawiam")
                button.parentElement.firstElementChild.classList.toggle("complete")
            })
        }

        function finished (button) {
            button.addEventListener("click", function(){
                // console.log("usuwam zakonczone")
                let counter1 = 0;
                for (i =0; i <tasklists.length; i++) {
                    if (tasklists[i].firstChild.className == "complete") {
                        const toDelete = tasklists[i];
                        toDelete.parentElement.removeChild(toDelete);
                        counter1 =+ 1;
                    }
                }
                counter.innerText = (tasklists.length - counter1);
            })
        }


    });

