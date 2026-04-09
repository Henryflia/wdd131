const year = document.querySelector("#currentyear");
const today = new Date;
year.innerHTML = `<span class="year">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.getElementById("menu");
const navigator = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigator.classList.toggle("open");
    hamButton.classList.toggle("open");
})


const foods = [
  // 🍎 FRUITS
  {
    name: "Apple",
    type: "fruit",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
    vitamins: ["Vitamin C", "Fiber"],
    bestTime: "Morning or afternoon",
    weight: "0.3 lb",
    origin: "Central Asia"
  },
  {
    name: "Banana",
    type: "fruit",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/400px-Banana-Single.jpg",
    vitamins: ["Vitamin B6", "Potassium"],
    bestTime: "Morning or before workout",
    weight: "0.25 lb",
    origin: "Southeast Asia"
  },
  {
    name: "Mango",
    type: "fruit",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop",
    vitamins: ["Vitamin A", "Vitamin C"],
    bestTime: "Afternoon",
    weight: "0.5 lb",
    origin: "South Asia"
  },
  {
    name: "Orange",
    type: "fruit",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop",
    vitamins: ["Vitamin C"],
    bestTime: "Morning",
    weight: "0.4 lb",
    origin: "China"
  },
  {
    name: "Pineapple",
    type: "fruit",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=300&fit=crop",
    vitamins: ["Vitamin C", "Bromelain"],
    bestTime: "Afternoon",
    weight: "2 lb",
    origin: "South America"
  },
  {
    name: "Strawberry",
    type: "fruit",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop",
    vitamins: ["Vitamin C", "Antioxidants"],
    bestTime: "Morning",
    weight: "0.03 lb",
    origin: "Europe"
  },
  {
    name: "Watermelon",
    type: "fruit",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop",
    vitamins: ["Vitamin A", "Vitamin C"],
    bestTime: "Afternoon",
    weight: "10 lb",
    origin: "Africa"
  },
  {
    name: "Papaya",
    type: "fruit",
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=400&h=300&fit=crop",
    vitamins: ["Vitamin C", "Vitamin A"],
    bestTime: "Morning",
    weight: "1 lb",
    origin: "Central America"
  },
  {
    name: "Grapes",
    type: "fruit",
    image: "https://live.staticflickr.com/65535/54585825488_88f7065ff4_o.jpg",
    vitamins: ["Vitamin C", "Vitamin K"],
    bestTime: "Afternoon",
    weight: "0.02 lb",
    origin: "Mediterranean"
  },
  {
    name: "Avocado",
    type: "fruit",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop",
    vitamins: ["Vitamin E", "Healthy fats"],
    bestTime: "Anytime",
    weight: "0.5 lb",
    origin: "Mexico"
  },

  // 🥦 VEGETABLES
  {
    name: "Carrot",
    type: "vegetable",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
    vitamins: ["Vitamin A", "Beta-carotene"],
    bestTime: "Anytime",
    weight: "0.15 lb",
    origin: "Central Asia"
  },
  {
    name: "Broccoli",
    type: "vegetable",
    image: "https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?w=400&h=300&fit=crop",
    vitamins: ["Vitamin C", "Vitamin K"],
    bestTime: "Lunch or dinner",
    weight: "0.5 lb",
    origin: "Italy"
  },
  {
    name: "Tomato",
    type: "vegetable",
    image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&h=300&fit=crop",
    vitamins: ["Vitamin C", "Lycopene"],
    bestTime: "Anytime",
    weight: "0.3 lb",
    origin: "South America"
  },
  {
    name: "Lettuce",
    type: "vegetable",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop",
    vitamins: ["Vitamin A", "Vitamin K"],
    bestTime: "Lunch or dinner",
    weight: "1 lb",
    origin: "Mediterranean"
  },
  {
    name: "Bell Pepper",
    type: "vegetable",
    image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    vitamins: ["Vitamin C", "Vitamin A"],
    bestTime: "Anytime",
    weight: "0.4 lb",
    origin: "Central America"
  },
  {
    name: "Cucumber",
    type: "vegetable",
    image: "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    vitamins: ["Vitamin K", "Hydration"],
    bestTime: "Afternoon",
    weight: "0.5 lb",
    origin: "India"
  },
  {
    name: "Spinach",
    type: "vegetable",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
    vitamins: ["Iron", "Vitamin K"],
    bestTime: "Morning or lunch",
    weight: "0.2 lb",
    origin: "Persia"
  },
  {
    name: "Onion",
    type: "vegetable",
    image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400&h=300&fit=crop",
    vitamins: ["Vitamin C", "Antioxidants"],
    bestTime: "Cooking",
    weight: "0.4 lb",
    origin: "Central Asia"
  },
  {
    name: "Garlic",
    type: "vegetable",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=400&h=300&fit=crop",
    vitamins: ["Vitamin B6", "Antioxidants"],
    bestTime: "Cooking",
    weight: "0.1 lb",
    origin: "Central Asia"
  },
  {
    name: "Zucchini",
    type: "vegetable",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
    vitamins: ["Vitamin C", "Potassium"],
    bestTime: "Lunch or dinner",
    weight: "0.4 lb",
    origin: "Italy"
  }
];


const fruits = document.querySelector("#fruits");
const vege = document.querySelector("#vege");
if (fruits) {
  fruits.addEventListener("click", (e) => {
    e.preventDefault();
    renderTemples(foods.filter(food => {
      const fruitssec = food.type

      return fruitssec === "fruit";
    })
    )
  });
}

if (vege) {
  vege.addEventListener("click", (e) => {
    e.preventDefault();
    renderTemples(foods.filter(food => {
      const vegesec = food.type

      return vegesec === "vegetable";
    })
    )
  });
}
function renderTemples(food){
  const f = document.querySelector(".food");
  if (!f) return;
    let section = ""
    for (const info of food) {
      section += `
        <section class="foodcart">
        <h1>${info.name}</h1>
        <figure>
        <img src=${info.image} alt=${info.name} loading="lazy" width=400 height=300>
        </figure>
        <p>Vitamins: ${info.vitamins.join(", ")}</p>
        <p>Best Time to Eat: ${info.bestTime}</p>
        <p>Weight: ${info.weight}</p>
        <p>Origin: ${info.origin} </p>
        </section>
        `
    }
    f.innerHTML = section;
}

const form = document.querySelector(".wf1")

if (form) {
  let visit = localStorage.getItem("subscribe") || 0;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    visit = Number(visit) + 1;
    localStorage.setItem("subscribe", visit);
    window.location.href = "review.html";
  })
}
renderTemples(foods);

