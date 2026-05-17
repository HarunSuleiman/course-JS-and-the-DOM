const data = document.querySelector(".card__content p");
data.innerHTML = "<em>Everything</em> You Need to Know About Data";
data.textContent = "A Few Things You Need to Know About Data";

const heading = document.querySelector(".video__arkit--content h1");
const newspan = document.createElement("span");
newspan.textContent = ",Right Now";
heading.appendChild(newspan);

heading.style.setProperty("color", "blue", "important");
