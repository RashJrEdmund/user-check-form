import arrayOfUsers from '../data/data.js'
import { displayUsers } from './script.js'

export const getSessionData = () =>
  JSON.parse(window?.sessionStorage.getItem('users'))

const saveToSession = (update) =>
  window?.sessionStorage.setItem('users', JSON.stringify(update))

export const deleteUser = (name) => {
  const newUserData = getSessionData()?.filter((user) => user.name !== name)
  console.log(newUserData)

  displayUsers(newUserData)

  saveToSession(newUserData)
}

export const resetAll = () => {
  document.querySelector("#search-name").value = "";
  document.querySelector("#search-age").value = "";
  window.sessionStorage.removeItem('users')

  saveToSession(arrayOfUsers)
  displayUsers(arrayOfUsers)
}

export const renderMessage = (message) => {
  return `<div class="message">${message}</div>`
}
