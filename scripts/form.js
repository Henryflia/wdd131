const year = document.querySelector("#currentyear");
const today = new Date;
year.innerHTML = `<span class="year">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function renderProducts(product) {
    const select = document.querySelector("#select");
    let s = ""
    for (const info of product) {
        s += `<option value="${info.id}">${info.name}</option>`
    }
    select.innerHTML += s
}
  
const form = document.querySelector(".wf1")
let visit = localStorage.getItem("visits") || 0;

form.addEventListener("submit", () => {
    visit = Number(visit) + 1;
    localStorage.setItem("visits", visit);

})


renderProducts(products)