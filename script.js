const addBtn = document.querySelector("#add");
const noteTitle = document.querySelector("#title");
const noteTextarea = document.querySelector("#note");
const section = document.querySelector(".section");

addBtn.addEventListener("click", function() {
  const note = noteTextarea.value;
  const title = noteTitle.value;

  // Create a new card element
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerHTML = `
    <div class="card__header">
      <h2 class="card__title">
        <i class="bi bi-pencil"></i> ${title}
      </h2>
    </div>
    <div class="card__body">
      <p>${note}</p>
    </div>
    <button id="delete" onclick="deleteNote(this)">
      Delete
    </button>
  `;

  // Append the new card to the section
  section.appendChild(newCard);

  // Reset the note textarea
  noteTextarea.value = "";
  noteTitle.value = "";
});

function reset() {
  noteTextarea.value = "";
  noteTitle.value = "";
}

function deleteNote(deleteBtn) {
  const card = deleteBtn.parentNode;
  section.removeChild(card);
}