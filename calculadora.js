const pantalla = document.querySelector('.pantalla');
const btn = document.querySelectorAll('.btn');

btn.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPresionado = boton.textContent;

        
        if (boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }

        if (boton.id === 'borrar') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'Error!') {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }

            return; 
        }

        if (boton.id === 'igual') {

            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'Error!'
            }
            return;
        }

        if (pantalla.textContent === '0'|| pantalla.textContent  === 'Error!') {         //si hay un 0 en la pantalla el 0 es remplazado por el boton apretado
            pantalla.textContent = botonPresionado;         //remplaza el 0 por el boton appretado
            return;
        } else {
            pantalla.textContent += botonPresionado;        //conactena los numero en caso de que ya no hay 0
        }
    })
});

/*DARK Y LIGHT MODE*/

const toggleSwitch = document.getElementById("toggleSwitch");
const tittleMode = document.querySelector(".tittleMode");
const root = document.documentElement;


toggleSwitch.addEventListener("click", () => {

    var themeMode = '';

    if(toggleSwitch.checked){
        themeMode = 'dark';
        tittleMode.textContent = 'DARK MODE';
    } else {
        themeMode = 'light';
        tittleMode.textContent = 'LIGHT MODE';
    }




    root.setAttribute("data-theme", themeMode);

});

