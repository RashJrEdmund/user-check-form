const form = document.querySelector('form');
const userContainers = document.querySelector('.all-users');

function displayUser({age, name}) {
  return `
  <div class="user">
    <div class="user-profile"></div>
    <div>
        <div class="text">
            <p class="user-name">${name}</p>
            <p class="user-age">${age} year${age >1? "s": ""}</p>
        </div>
        <button class="remove-user"><span>X</span> Remove user</button>
    </div>
</div>`
}

function displayUsers(persons) { // for loop method of displaying
  let template = "";
  for (let i=0; i<persons.length; i++) {
    template += displayUser(persons[i]);
  }

  return template
}

/* function displayUsers(persons) { // this the altinate of the foor loop
  return persons.map(displayUser).join("")
} */

// userContainers.innerHTML = displayUsers(arrayOfUsers);

function searchUsers(name, age) { // for loop method of searching
  let results = [];
  for(let i=0; i<arrayOfUsers.length; i++) {
    if(((!name || arrayOfUsers[i].name === name)||(arrayOfUsers[i].name.includes(name))) && (!age || arrayOfUsers[i].age === age)) {
      results.push(arrayOfUsers[i])
    }
  }

  return results

  /* return users.filter (
    (arrayOfUsers)=>(!name || arrayOfUsers.name == name) && (!age || arrayOfUsers.age == age)
  ); */
}

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  userContainers.innerHTML = displayUsers(
    searchUsers(e.target.name.value, +e.target.age.value)
  );
});

/* 
let initials =(name) => {
  return name
    .split(" ")
    .map((yo) => yo.[0].toUppercase())
    .join(".");
} */

function shouldResolve() {
  return Math.random() < 0.85;
}

/* function searchUsers(name, age) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve ()) {
        resolve(
          users.filter(
            (user) => 
            (!name || compareNames(user.name, name)) &&
            (!age || user.age === age)
          )
        );
      }else {
        reject([]);
      }
    }, 2000);
  });
}

function renderMessage(message) {
  return `<div class="message">${message}</div>`;
}

userContainers.innerHTML = displayUsers(users);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userContainers.innerHTML = renderMessage("searching users...");
  searchUsers(e.target.name.value, +e.target.age.value)
  .then((result) => {
    userContainers.innerHTML = displayUser(result);
  })
  .catch(e) = > {
    userContainers.innerHTML = renderMessage(
      "Error loading users! Please try again"
    );
  };
}); */