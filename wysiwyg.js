// Create an array of objects that represents famous people (see structure below).

var arrayOfPeople = [
  {
    title: "Dev",
    name: "Paul",
    bio: "Did some stuff. Was totally chill about it.",
    image: "https://avatars1.githubusercontent.com/u/16566434?v=3&s=460",
    lifespan: {
      birth: 1990,
      death: "TBD"
    }
  },
  {
    title: "Dev",
    name: "Paul",
    bio: "Did some stuff. Was totally chill about it.",
    image: "https://avatars1.githubusercontent.com/u/16566434?v=3&s=460",
    lifespan: {
      birth: 1990,
      death: "TBD"
    }
  },
  {
    title: "Dev",
    name: "Paul",
    bio: "Did some stuff. Was totally chill about it.",
    image: "https://avatars1.githubusercontent.com/u/16566434?v=3&s=460",
    lifespan: {
      birth: 1990,
      death: "TBD"
    }
  }
]
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
for (var i = 0; i < arrayOfPeople.length; i++) {
  document.getElementById('placement').innerHTML += "<article id='id" + i + "'><header>" + arrayOfPeople[i].title + " " + arrayOfPeople[i].name + "</header><p id='bio" + i + "'>" + arrayOfPeople[i].bio + "</p><img src='" + arrayOfPeople[i].image + "'><footer>" + arrayOfPeople[i].lifespan.birth + "-" + arrayOfPeople[i].lifespan.death +"</footer></article>";
};
document.getElementById('placement').addEventListener("click", function(e) {
  for (var i = 0; i < e.path.length; i++) {
    if (e.path[i].id !== undefined) {
      if (e.path[i].id.substring(0, 2) === "id") {
        id = e.path[i].id;
      }
    }
  };
  makeBorder(id)
  gainFocus()
  e.stopPropagation();
})
// When you click on one of the person elements, a dotted border should appear around it.

function makeBorder(id) {
  for (i = 0; i < arrayOfPeople.length; i++) {
    document.getElementById("id" + i).style.border = "none"
  }
  document.getElementById(id).style.border = "3px dotted black"
}

// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.

function gainFocus() {
  document.getElementById('text').focus()
}

// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.


document.getElementById('text').addEventListener("keyup", function(e) {
  document.getElementById('bio' + id.substring(2, id.length)).innerHTML = document.getElementById('text').value
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    document.getElementById('text').value = ""
  }
})

// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.