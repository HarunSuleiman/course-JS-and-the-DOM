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

const start = document.querySelector("#start-now");

start.style.backgroundColor = "#1ec9dc";
start.style.borderRadius = "5rem";

// select the hero element
const hero = document.querySelector(".hero--homepage");

// add the new class
hero.classList.add("new-hero");
const cardList = document.querySelectorAll(".card");
for (i = 0; i < cardList.length; i++) {
  cardList[i].classList.add("new-card");
}
///////ading event listner

// select the h1 element
const header = document.querySelector("h1");

// store the original text in a variable
const originalText = header.textContent;

// store the updated text in a variable
const updatedText = "Build an AR app";

// add a listener for the mouse moving over the header element
header.addEventListener("mouseover", function () {
  header.textContent = updatedText;
});

// add a listener for the mouse moving out of the header element
header.addEventListener("mouseout", function () {
  header.textContent = originalText;
});

const myCustomDiv = document.createElement("div");

for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = "This is paragraph number " + i;

  newElement.addEventListener("click", function respondToTheClick(evt) {
    console.log("A paragraph was clicked.");
  });

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);






function toggleFavorite(event) {
    // create a helper variable to hold the target
    const target = event.target;

    // check if the target is the button
    if (target.nodeName === 'BUTTON') {
        // stop the default behavior (navigating to the nanodegree page)
        event.preventDefault();

        // check if the this is already a favorite
        if (target.textContent.startsWith('Add')) {
            // change the text to "Remove"
            event.target.textContent = 'Remove from favorites';

            // create a an element to hold the favorite status indicator
            const fav = document.createElement('p');
            fav.textContent = '⭐ ⭐ ⭐ ';
             // append the fav element to the title 
            target.parentElement.appendChild(fav);
        } else {
            // change the text back to "Add"
            event.target.textContent = 'Add to favorites';
            // remove the favorite status indicator
            target.nextSibling.remove();
        }
    }
}