
document.addEventListener("DOMContentLoaded", function() {
   
    let spanVermell = document.getElementById("vermell");

    
    let contadorVermell = 0;

    
    spanVermell.addEventListener("click", function() {
        contadorVermell++; 
        spanVermell.textContent = contadorVermell; 
    });
});


document.addEventListener("DOMContentLoaded", function() {
   
    let imatge = document.getElementById("imatge");
    let spanBlau = document.getElementById("blau");

   
    let contadorBlau = 0;

    
    imatge.addEventListener("contextmenu", function(event) {
        event.preventDefault(); 
        contadorBlau++; 
        spanBlau.textContent = contadorBlau; 
    });
});


document.addEventListener("DOMContentLoaded", function() {
   
    let imatge = document.getElementById("imatge");
    let spanVerd = document.getElementById("verd");


    let contadorVerd = 0;

   
    imatge.addEventListener("mouseover", function() {
        contadorVerd++; 
        spanVerd.textContent = contadorVerd; 
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let spantaronja = document.getElementById("taronja");
    let contadorTaronja = 0;

    
    document.addEventListener("keydown", function() {
        contadorTaronja++; 
        spantaronja.textContent = contadorTaronja; 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let spanGroc = document.getElementById("groc");

    
    document.addEventListener("keydown", function(event) {
        spanGroc.textContent = `${event.key}`;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let spanLila = document.getElementById("lila");
    let contadorLila = 0;

   
    document.addEventListener("keydown", function(event) {
        if (event.key.toLowerCase() === "g") {
            contadorLila++; 
            spanLila.textContent = contadorLila; 
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let botoCrear = document.getElementById("crear");
    let llista = document.getElementById("llista");
    let contador = 0;

    botoCrear.addEventListener("click", function() {
        contador++; 

        let nouElement = document.createElement("li");
        nouElement.textContent = `Aquest és l'element ${contador} de la llista`; 
        nouElement.classList.add("element"); 
        nouElement.id = `element${contador}`; 

        llista.appendChild(nouElement); 
    });
});



let user = {
    nombre: "Roberto",
    apellido: "Heras",
    edad: 35,
    aficiones: ["escalada", "sushi", "papiroflexia"]
};


function generarCard(usuario) {
    
    let card = document.createElement("div");
    card.classList.add("card");

    
    let nombre = document.createElement("h2");
    nombre.textContent = `${usuario.nombre} ${usuario.apellido}`;
    card.appendChild(nombre);

    
    let edad = document.createElement("p");
    edad.textContent = `Edad: ${usuario.edad} años`;
    card.appendChild(edad);

   
    let tituloAficiones = document.createElement("h3");
    tituloAficiones.textContent = "Aficiones";
    tituloAficiones.classList.add("aficiones-titulo");
    card.appendChild(tituloAficiones);

    
    let aficionesContainer = document.createElement("div");
    aficionesContainer.classList.add("aficiones-container");

    
    usuario.aficiones.forEach(aficion => {
        let span = document.createElement("span");
        span.classList.add("aficion");
        span.textContent = aficion.charAt(0).toUpperCase() + aficion.slice(1); 
        aficionesContainer.appendChild(span);
    });

    card.appendChild(aficionesContainer);

    
    document.body.appendChild(card);
}


document.addEventListener("DOMContentLoaded", function() {
    generarCard(user);
});


    document.getElementById("crear2").addEventListener("click", function() {
        const filosofs = [
            { nombre: "Platón", pais: "Grecia", corriente: "idealismo", arma: "Dialectica", img: "platon_busto.jpg" },
            { nombre: "Aristóteles", pais: "Grecia", corriente: "naturalismo", arma: "Lógica", img: "1259.jpg" },
            { nombre: "Descartes", pais: "Francia", corriente: "racionalismo", arma: "meditación", img: "gr1.jpeg" },
            {nombre: "Kant", pais: "Alemania", corriente: "Trascendentalismo", arma: "Crítica", img: "immanuel-kant.jpg" },
            {nombre: "Hume", pais: "Escocia", corriente: "empirismo", arma: "escepticismo", img: "Resumen-de-David-Hume.webp" }
        ];
        
        const container = document.getElementById("tarjetas-container");
        container.innerHTML = ""; 
        
        filosofs.forEach(filosofo => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            const h1 = document.createElement("h1");
            h1.textContent = filosofo.nombre;
            
            const pais = document.createElement("p");
            pais.innerHTML = `<strong>País:</strong> ${filosofo.pais}`;
            
            const corrent = document.createElement("p");
            corrent.innerHTML = `<strong>Corriente:</strong> ${filosofo.corriente}`;
            
            const arma = document.createElement("p");
            arma.innerHTML = `<strong>Arma:</strong> ${filosofo.arma}`;
            
            const img = document.createElement("img");
            img.src = filosofo.img;
            img.alt = `Retrat de ${filosofo.nom}`;
            img.style.width = "100px";
            
            card.appendChild(h1);
            card.appendChild(pais);
            card.appendChild(corrent);
            card.appendChild(arma);
            card.appendChild(img);
            
            container.appendChild(card);
        });
    });












