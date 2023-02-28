
    const toggle = document.querySelectorAll(".toggle input[type=radio]");
    const body = document.querySelector("body");
    const darkToggle = document.querySelector("#dark");
    const lightToggle = document.querySelector("#light");


    // Check if theme is already set in local storage and display the proper scheme 

    // Light Theme
    if(localStorage.getItem("theme") === "light"){

        body.classList.remove("dark");
        body.classList.add("light");
        lightToggle.checked = true;
    }

      
        
    // Dark theme

    if(localStorage.getItem("theme") === "dark"){

        body.classList.remove("light");
        body.classList.add("dark");
        darkToggle.checked = true;
    }


    // Check default scheme if site is loaded and local storage is empty
    if(localStorage.getItem("theme") == null){

        window.matchMedia("(prefers-color-scheme: light)").onchange = () => {
    
            if(window.matchMedia("(prefers-color-scheme: dark)").matches){
                darkToggle.checked = true;
            }
        
        
              if(window.matchMedia("(prefers-color-scheme: light)").matches){
                lightToggle.checked = true;
            }
    
        }


    }



    console.log(localStorage.getItem("theme"));
    

    toggle.forEach(toggleRadio => {

        toggleRadio.addEventListener("click", ()=> {
            
            if(darkToggle.checked){

                localStorage.setItem("theme", "dark");
                body.classList.remove("light");
                body.classList.add("dark");
            }
            
            if(lightToggle.checked){
                localStorage.setItem("theme", "light");
                body.classList.remove("dark");
                body.classList.add("light");
            }

        });

    });


    
