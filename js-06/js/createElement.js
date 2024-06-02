// const section = document.createElement('section');

// const h2 =  document.createElement("h2");
// const text = document.createTextNode("Productos");
// h2.textContent = "Productos";

// h2.appendChild(text);


// section.appendChild(h2);

// console.log(section);


// let main = document.querySelector("main");
// main.appendChild(section);

// let main = document.querySelector("main");
// main.innerHTML += "<section><h2> Productos </h2></section>"

let main = document.querySelector("main");

const title = "Productos";



main.innerHTML += `
    <section>
        <h2> ${title} </h2>
    </section>
    `;


const small = document.querySelector("small");
small.textContent = "CopyWrite 2025";
small.className = "footer_small";
small.style.color = "orange";




// const otroSmall = small.cloneNode(true);
// otroSmall.textContent = 2025;


console.log(small);

small.remove();