let myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  // do stuff here
  //get all the fields from DOM
  const title = document.getElementById("inputTitle").value;
  const author = document.getElementById("inputAuthor").value;
  const pages = document.getElementById("inputPages").value;
  const isRead = document.getElementById("inputIsRead").value;

  myLibrary.push(new Book(title, author, pages, isRead));

  //remove old library and draw a new one
  const libraryContainer = document.getElementById("library_container");  
  libraryContainer.querySelectorAll('*').forEach(n => n.remove()); 
  drawLibrary();
}

function drawLibrary(){myLibrary.forEach((bookEntry,i) => {
  const bookDiv = document.createElement("div");
  bookDiv.className = "book";
  bookDiv.id = i;
  const pTitle = document.createElement("p");
  pTitle.appendChild(document.createTextNode(bookEntry.title))
  bookDiv.appendChild(pTitle);

  const pAuthor = document.createElement("p");
  pAuthor.appendChild(document.createTextNode(bookEntry.author))
  bookDiv.appendChild(pAuthor);

  const pPages = document.createElement("p");
  pPages.appendChild(document.createTextNode(bookEntry.pages))
  bookDiv.appendChild(pPages);

  const pIsRead = document.createElement("p");
  pIsRead.appendChild(document.createTextNode(bookEntry.isRead))
  bookDiv.appendChild(pIsRead);

  const bDeleteSelf = document.createElement("button");
  bDeleteSelf.onclick = function(){
    document.getElementById(bookDiv.id).remove();
    delete myLibrary[bookDiv.id];
  }
  bDeleteSelf.appendChild(document.createTextNode("Delete"))
  bookDiv.appendChild(bDeleteSelf);

  const libraryContainer = document.getElementById("library_container");

  libraryContainer.appendChild(bookDiv);
})
}

function openBookForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm2").reset();
}

function cancelFrom() {
  document.getElementById("myForm").style.display = "none";
}