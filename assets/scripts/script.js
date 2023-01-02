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
  { name: 'Mr. Leonard', age: 30 },
  { name: 'Mme Faith', age: 28 },
  { name: 'Gran Humphry', age: 20 },
  { name: 'Mr Array', age: 26 },
  { name: 'Ashley Jones', age: 15 },
  { name: 'Kilian Mbappe', age: 26 },
  { name: 'Christiano Ronaldo', age: 37 },
  { name: 'Leonel Messi', age: 35 },
  { name: 'Zlatan Ibrahim', age: 41 },
  { name: 'Lebron James', age: 38 },
  { name: 'Jamel Morant', age: 23 },
  { name: 'Steve Dogllas', age: 19 },
  { name: 'Steve Rogers', age: 30 },
  { name: 'Vin Diesel', age: 28 },
  { name: 'Jack Sparrow', age: 59 },
  { name: 'Senior Dev', age: 19 },
  { name: 'Jango Kelmith', age: 20 }
]

const form = document.querySelector('form')
const userContainers = document.querySelector('.all-users')
const nameInput = document.querySelector('#search-name')
const ageInput = document.querySelector('#search-age')

const asssi = 'manda'
console.log(asssi.toLocaleUpperCase())

function displayUser ({ age, name }, acronym, highlighted) {
  return `
  <div class="user">
    <div class="user-profile">${acronym}</div>
    <div>
        <div class="text">
            <p class="user-name">${nameInput.value.length === 0 ? name : getHilight(name, highlighted)}</p>
            <p class="user-age">${age} year${age > 1 ? 's' : ''}</p>
        </div>
        <button class="remove-user" value="${name} ${age}"><span>X</span> Remove user</button>
    </div>
  </div>`
}

const getHilight = (name, keyWord) => {
  for ( let i in name) {
    if (name.toLowerCase() === keyWord.toLowerCase()) {
      return name
    } else if ((keyWord.length === 1) && (name.charAt(i).toLowerCase() === keyWord.charAt(0).toLowerCase())) {
      let keyWordLength = parseInt(keyWord.length) + parseInt(i)
      return `${name.slice(0, i)}<span class="highlight">${name.slice(i, keyWordLength)}</span>${name.slice(keyWordLength, name.length)}`
    } else if ((keyWord.length > 1) && ((name.charAt(i).toLowerCase() + name.charAt(parseInt(i) + 1).toLowerCase()) === (keyWord.charAt(0).toLowerCase() + keyWord.charAt(1).toLowerCase()))) {
      let keyWordLength = parseInt(keyWord.length) + parseInt(i)
      return `${name.slice(0, i)}<span class="highlight">${name.slice(i, keyWordLength)}</span>${name.slice(keyWordLength, name.length)}`
    }
  }
}

const getInitials = (name) => {
  const arra = [...name]
  let final = arra[0]
  for (let j = 0; j < arra.length; j++) {
    if (arra[j].includes(' ') && typeof (arra[j + 1] === String)) {
      final += arra[j + 1]
    }
  }
  return final
}

function displayUsers (persons, highlight) { // for loop method of displaying
  let template = ''
  let firsTwoLetters = ''
  for (let i = 0; i < persons.length; i++) {
    firsTwoLetters = getInitials(persons[i].name)
    template += displayUser(persons[i], firsTwoLetters, highlight)
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
    if ((!name || (arrayOfUsers[i].name).toLowerCase().includes(name.toLowerCase())) && (!age || arrayOfUsers[i].age === age) /* && (name.includes('.')) */) {
      results.push(arrayOfUsers[i])
    }
  }

  return displayUsers(results, name)

  /* return users.filter (
    (((!name || arrayOfUsers[i].name === name) || ((arrayOfUsers[i].name).toLowerCase().includes(name.toLowerCase()))) && (!age || arrayOfUsers[i].age === age))
  ); */
}

// boundary line

function searchUsers (name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bool = false
      for (let i = 0; i < arrayOfUsers.length; i++) {
        if ((!name || (arrayOfUsers[i].name).toLowerCase().includes(name.toLowerCase())) && (!age || arrayOfUsers[i].age === age)) {
          bool = true
        }
      }
      if (bool) {
        resolve(searchUsersLoop(name, age))
      } else {
        console.log('nothing here')
        reject('nothing here')
      }
    }, 1500)
  })
}

function renderMessage (message) {
  return `<div class="message">${message}</div>`
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  userContainers.innerHTML = renderMessage('searching users...')
  console.log(nameInput.value.length)
  console.log(ageInput.value)
  searchUsers(e.target.name.value, +e.target.age.value) // this another way to pass these inputs
    .then((result) => {
      userContainers.innerHTML = result
    })
    .catch((e) => {
      userContainers.innerHTML = renderMessage(
        'Error! no user matches your search, please try again'
      )
    })
})

const addToDeletedUsers = (btnVal) => {
  const arrKeys = Object.keys(arrayOfUsers[0])
  console.log('this is the arrkeys', arrKeys)
  for (let i = 0; i < arrayOfUsers.length; i++) {
    if (btnVal === (arrayOfUsers[i].name + ' ' + arrayOfUsers[i].age)) {
      deletedUsers.push({[arrKeys[0]] : arrayOfUsers[i][arrKeys[0]], [arrKeys[1]] : arrayOfUsers[i][arrKeys[1]]})
    }
  }
}

// HERE'S WHERE ALL THE EXTRA WORK STARTS

/* const arrKeys = Object.keys(arrayOfUsers[0])

const arrObj = arrKeys.map((key) => { // the .map() method takes an anonymous function as a parameter
  return { [key]: arrayOfUsers[0][key] }
})
console.log('this is arrobj', arrObj) */

/* function removeDeleted (exception) { // for loop method of searching
  const results = []
  for (let i in arrayOfUsers) {
    for (let j in exception) {
      let isFound = false
      if ((arrayOfUsers[i].name + ' ' + arrayOfUsers[i].age ) === (exception[j].name + ' ' + exception[j].age)) {
        isFound = true
      }
      if ((parseInt(j) === parseInt(exception.length - 1)) && (isFound === false)) {
        results.push(arrayOfUsers[i])
      }
    }
  }

  return displayUsers(results)
}

const user = document.querySelectorAll('.user')
const removeUserBtn = document.querySelectorAll('.remove-user')
let deletedUsers = []

removeUserBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    addToDeletedUsers(btn.value)
    console.log('these are the deleted values', deletedUsers)
    userContainers.innerHTML = removeDeleted(deletedUsers)
    user.forEach((someone) => {
      someone.classList.toggle('.display-div')
    })
  })
}) */
