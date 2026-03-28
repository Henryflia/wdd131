const year = document.querySelector("#currentyear");
const today = new Date;
year.innerHTML = `<span class="year">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;

const temp = 10;
const wind = 15;
const windc = document.querySelector(".windchill");

function calculateWindChill(t, w) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16);
}

if (temp <= 10 && wind > 4.8) {
    windc.innerHTML = `<span>${calculateWindChill(temp, wind).toFixed(2)} °C</span>`
}
else
{
    windc.innerHTML = `N/A`
}


