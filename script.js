function loginConfirmation() {
  console.log("You are successfully signed up, yay!");
}

// Get the modal
const modal = document.getElementById("myModal");
// Get the modal and modal content element
const modalContent = document.querySelector(".modal-content p.loremIpsum");

// Get the links
const termsLink = document.getElementById("Terms");
const privacyLink = document.getElementById("Privacy");

// Function to load content into the modal
async function loadContent(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    modalContent.innerHTML = text;
    modal.style.display = "block"; // Show the modal
  } catch (error) {
    console.error("Failed to load content:", error);
    modalContent.textContent = "Error loading content. Please try again.";
    modal.style.display = "block";
  }
}

// Event listeners for the links
termsLink.addEventListener("click", (e) => {
  e.preventDefault();
  loadContent("assets/terms.txt");
});

privacyLink.addEventListener("click", (e) => {
  e.preventDefault();
  loadContent("assets/privacy.txt");
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close-button")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const myInput = document.getElementById("pass");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate capital letters
  const upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
