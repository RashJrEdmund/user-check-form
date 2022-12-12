let arrayOfUsers = [
  {name: "Rash Oracle", age: 20},
  {name: "Jr Jr", age: 21},
  {name: "Edmund Son", age: 22},
  {name: "Ora Shus", age: 17},
  {name: "Storm King", age: 16},
  {name: "Brandy Jonathan", age: 16},
  {name: "Marry Anne", age: 20},
  {name: "Alaric Mboma", age: 11},
  {name: "Shey Emma", age: 29},
  {name: "Tata Malone", age: 20},
  {name: "Charles Peterson", age: 24},
  {name: "Uncle Gaston", age: 31},
  {name: "Uncle Leo", age: 29},
  {name: "Mme Faith", age: 28},
  {name: "Gran Humphry", age: 20},
  {name: "Mr Array", age: 26}
]

const form = document.querySelector('form');
const userContainers = document.querySelector('.all-users');

function displayUser({age, name}) {
  return `
  <div class="user">
      <div class="user-profile"></div>
      <div>
          <p class="user-name">${name}</p>
          <p class="user-age">${age} year${age >1? "s": ""}</p>
      </div>
  </div>`
}

function displayUsers(persons) { // for loop method of displaying
  let template = "";
  for (let i=0; i<persons.length; i++) {
    template += displayUser(persons[0]);
  }
  return template
}

/* function displayUsers(persons) {
  return persons.map(displayUser).join("")
} */

// userContainers.innerHTML = displayUsers(arrayOfUsers);

function searchUsers(name, age) { // for loop method of searching
  let results = [];
  for(let i=0; i<arrayOfUsers.length; i++) {
    if((!name || arrayOfUsers.name == name) && (!age || arrayOfUsers.age == age)) {
      results.push(arryOfUsers[i])
    }
  } 
  return results

  /* return users.filter (
    (arrayOfUsers)=>(!name || arrayOfUsers.name == name) && (!age || arrayOfUsers.age == age)
  ); */
}