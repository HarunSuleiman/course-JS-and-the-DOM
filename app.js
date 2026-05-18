const data = document.querySelector(".card__content p");
data.innerHTML = "<em>Everything</em> You Need to Know About Data";
data.textContent = "A Few Things You Need to Know About Data";

const heading = document.querySelector(".video__arkit--content h1");
const newspan = document.createElement("span");
newspan.textContent = ",Right Now";
heading.appendChild(newspan);

heading.style.setProperty("color", "blue", "important");
heading.classList.contains("text-center");
heading.classList.add("ice-cream");

const start = document.querySelector('#start-now');


start.style.backgroundColor = '#1ec9dc';
start.style.borderRadius = '5rem';


// select the hero element
const hero = document.querySelector('.hero--homepage');

// add the new class
hero.classList.add('new-hero');
const cardList = document.querySelectorAll(".card");
for (i = 0; i < cardList.length; i++) {
  cardList[i].classList.add("new-card");
}

