
    const toggle = document.querySelectorAll(".toggle input[type=radio]");
    const body = document.querySelector("body");
    const darkToggle = document.querySelector("#dark");
    const lightToggle = document.querySelector("#light");
    const toggleLabel = document.querySelector("#toggle_label");


    // Check if theme is already set in local storage and display the proper scheme 

    // Light Theme
    if(localStorage.getItem("theme") === "light"){

        body.classList.remove("dark");
        body.classList.add("light");
        lightToggle.checked = true;
        toggleLabel.innerHTML = "Light Mode";
        toggleLabel.setAttribute("for", "light");
    }

      
        
    // Dark theme

    if(localStorage.getItem("theme") === "dark"){

        body.classList.remove("light");
        body.classList.add("dark");
        darkToggle.checked = true;
        toggleLabel.innerHTML = "Dark Mode";
        toggleLabel.setAttribute("for", "dark");
    }


    // Check default scheme if site is loaded and local storage is empty
    if(localStorage.getItem("theme") == null){

        window.matchMedia("(prefers-color-scheme: light)").onchange = () => {
    
            if(window.matchMedia("(prefers-color-scheme: dark)").matches){
                darkToggle.checked = true;
                toggleLabel.innerHTML = "Dark Mode";
                toggleLabel.setAttribute("for", "dark");
            }
        
        
              if(window.matchMedia("(prefers-color-scheme: light)").matches){
                lightToggle.checked = true;
                toggleLabel.innerHTML = "Light Mode";
                toggleLabel.setAttribute("for", "light");
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
                toggleLabel.innerHTML = "Dark Mode";
                toggleLabel.setAttribute("for", "dark");
            }
            
            if(lightToggle.checked){
                localStorage.setItem("theme", "light");
                body.classList.remove("dark");
                body.classList.add("light");
                toggleLabel.innerHTML = "Light Mode";
                toggleLabel.setAttribute("for", "light");
            }

        });

    });


    
