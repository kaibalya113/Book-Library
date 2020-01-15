// Librery books using javascript ES6
class Book {
  constructor(name, auther, type) {
    this.name = name;
    this.auther = auther;
    this.type = type;
  }
}
class Display {
  add(book) {
    let tableBody = document.getElementById("tableBody");
    let string = `
                <tr>
                <td>${book.name}</td>
                <td>${book.auther}</td>
                <td>${book.type}</td>
            </tr>
                `;
    tableBody.innerHTML += string;
    localStorage.setItem("iteams", book);
  }
  //  clear form after submit
  clear() {
    let libreryForm = document.getElementById("libraryForm"); // get form id
    libreryForm.reset();
  }

  // impliment the validate function
  validate(book) {
    if (book.name.length >= 2 && book.auther.length >= 2) {
      return true;
    } else {
      return false;
    }
  }

  // showing sucess message
  show(type, dmessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message</strong> ${dmessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(function() {
      message.innerHTML = "";
    }, 2000);
  }
}
//add submit event Listener to form
let libreryForm = document.getElementById("libraryForm"); // get form id
libreryForm.addEventListener("submit", onSubmit); // listen submit button, when submit click then call "onSubmit" sunction

function onSubmit(e) {
  e.preventDefault();
  let name = document.getElementById("bookName").value;
  let auther = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  // get book object
  let book = new Book(name, auther, type);
  console.log(book);

  // crate a display object to dispaly the book
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("sucess", "Your book has been added");
  } else {
    // show a error message to the uer
    display.show("error", "your book couldnt add to self");
  }

  // console.log("form submited sucessfully");
}
