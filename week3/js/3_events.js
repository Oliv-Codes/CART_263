window.onload = setup;
function setup(){
    console.log("events!")
    // let introBoolean = "inactive"
    // let s1Bolean = "inactive"


    // let introSection = document.getElementById ("intro");
    // introSection.addEventListener("click",mouseIntroHandler);

    let allSections = document.querySelectorAll(".mouseclick-active-section")
    for (let element of allSections) {
        element.addEventListener("click",changeOpacityOfSection)
    }

    function changeOpacityOfSection(e){
        console.log(this);
        if(this.getAttribute("custom-bool") === "inactive") {
            let classToAdd = `${this.id}-section-active`
            let classToAddP = `${this.id}-section-p-active`
            this.classList.add(classToAdd);
            document.querySelector(`#${this.id} p`).
                classList.add(classToAddP)

            this.setAttribute("custom-bool", "active")
            console.log(this);

        }

        else {
            let classToAdd = `${this.id}-section-active`
            let classToAddP = `${this.id}-section-p-active`
            this.classList.remove(classToAdd);
            document.querySelector(`#${this.id} p`).classList.remove(classToAddP)

            this.setAttribute("custom-bool", "inactive")
            console.log(this);
        }
    }

    function mouseIntroHandler(e) {
        console.log("hello")
        // console.log(e)
        //console.log(this);
        this.style.background = "rgba(214,110,239,0.5)";
        //console.log(document.querySelector(`#${this.id}`));
        // console.log("#intro p")
        // console.log("#" + this.id+ "p")
        //`#${this.id}p`
        //this.style.setProperty("opacity",".5")
        //document.querySelector(`#${this.id}`).style.setProperty("opacity",".75")
        document.querySelector(`#${this.id}p`)
        classList.add("intro-selection-p-active");

    }

}