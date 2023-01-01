const arrayOfUsers = [
  { name: 'Rash Oracle', age: 20 },
  { name: 'Nana Otto', age: 20 },
  { name: 'Jr Jr', age: 21 },
  { name: 'Edmund Son', age: 22 },
  { name: 'Orashus F.', age: 17 },
  { name: 'Luciernaga Ndi', age: 19 },
  { name: 'The Godfather', age: 20 },
  { name: 'Storm King', age: 16 },
  { name: 'Brandy Jonathan', age: 21 },
  { name: 'Marry Anne', age: 20 },
  { name: 'Alaric Mboma', age: 21 },
  { name: 'Shey Emma', age: 29 },
  { name: 'Tata Malone', age: 20 },
  { name: 'Abu Bea', age: 24 },
  { name: 'Charles Peterson', age: 24 },
  { name: 'Mr. Gaston', age: 31 },
  { name: 'Uncle Leo', age: 30 },
  { name: 'Mme Faith', age: 28 },
  { name: 'Gran Humphry', age: 20 },
  { name: 'Mr Array', age: 26 },
  { name: 'Ashley Jones', age: 15 },
  { name: 'Kilian Mbappe', age: 26 },
  { name: 'Christiano Ronaldo', age: 37 },
  { name: 'Leonel Messi', age: 36 },
  { name: 'Zlatan Ibrahim', age: 40 },
  { name: 'Lebron James', age: 37 },
  { name: 'Jamel Morant', age: 21 },
  { name: 'Steve Dogllas', age: 19 },
  { name: 'Steve Rogers', age: 30 },
  { name: 'Vin Diesel', age: 28 },
  { name: 'Jack Sparrow', age: 28 },
  { name: 'Senior Dev', age: 19 },
  { name: 'Jango Kelmith', age: 20 }
]

const form = document.querySelector('form')
const userContainers = document.querySelector('.all-users')
const user = document.querySelectorAll('.user')
const removeUserBtn = document.querySelectorAll('.remove-user')

const asssi = 'manda'
console.log(asssi.toLocaleUpperCase())

function displayUser ({ age, name }, acronym) {
  return `
  <div class="user">
    <div class="user-profile">${acronym}</div>
    <div>
        <div class="text">
            <p class="user-name">${name}</p>
            <p class="user-age">${age} year${age > 1 ? 's' : ''}</p>
        </div>
        <button class="remove-user"><span>X</span> Remove user</button>
    </div>
  </div>`
}

const getInitials = (name) => {
  const arra = [...name]
  let final = arra[0]
  for (let j = 0; j < arra.length; j++) {
    if (arra[j].includes(' ') && typeof(arra[j + 1] === String)) {
      final += arra[j + 1]
    }
  }
  return final
}

function displayUsers (persons) { // for loop method of displaying
  let template = ''
  let firsTwoLetters = ''
  for (let i = 0; i < persons.length; i++) {
    firsTwoLetters = getInitials(persons[i].name)
    template += displayUser(persons[i], firsTwoLetters)
  }
  return template
}

/* function displayUsers(persons) { // this the altinate of the foor loop
  return persons.map(displayUser).join("")
} */

// userContainers.innerHTML = displayUsers(arrayOfUsers);

function searchUsersLoop (name, age) { // for loop method of searching
  const results = []
  for (let i = 0; i < arrayOfUsers.length; i++) {
    if (((!name || arrayOfUsers[i].name === name) || ((arrayOfUsers[i].name).toLowerCase().includes(name.toLowerCase()))) && (!age || arrayOfUsers[i].age === age)) {
      results.push(arrayOfUsers[i])
    }
  }

  return displayUsers (results)

  /* return users.filter (
    (((!name || arrayOfUsers[i].name === name) || ((arrayOfUsers[i].name).toLowerCase().includes(name.toLowerCase()))) && (!age || arrayOfUsers[i].age === age))
  ); */
}

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   userContainers.innerHTML = displayUsers(
//     searchUsers(e.target.name.value, +e.target.age.value)
//   )
// })


// boundary line

/* function searchUsers(name, age) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve ()) {
        resolve(
          arrayOfUsers.filter(
            (user) =>
            (!name || searchUsers(user.name, name)) &&
            (!age || user.age === age)
          )
        )
      }else {
        reject([])
      }
    }, 2000)
  })
} */

function searchUsers(name, age) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      let bool = false
      for (let i = 0; i < arrayOfUsers.length; i++) {
        if (((arrayOfUsers[i].name).toLowerCase().includes(name.toLowerCase())) && (!age || arrayOfUsers[i].age === age)) {
          bool = true
        }
      }
      if (bool) {
        resolve(searchUsersLoop(name, age))
      } else {
        console.log('nothing here')
        reject([])
      }
    }, 2000)
  })
}

function renderMessage(message) {
  return `<div class="message">${message}</div>`
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  userContainers.innerHTML = renderMessage("searching users...")
  searchUsers(e.target.name.value, +e.target.age.value)
  .then((result) => {
    userContainers.innerHTML = result
  })
  .catch((e) => {
    userContainers.innerHTML = renderMessage(
      "Error loading users! Please try again"
    )
  })
})

/* removeUserBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn, parseInt(btn.value))
    let firsTwoLetters = ''
    let template = ''
    for (let i = 0; i < arrayOfUsers.length; i++) {
      if (i == btn.value) {
        continue
      }
      firsTwoLetters = getInitials(arrayOfUsers[i].name)
      template += displayUser(arrayOfUsers[i], firsTwoLetters)
    }
    userContainers.innerHTML = template
  })
}) */

/* removeUserBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('shishs')
    console.log(user)
    user.forEach((someone) => {
      console.log(someone)
      someone.classList.toggle('.display-div')
    })
  })
}) */
