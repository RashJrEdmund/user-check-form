import { resetData } from '../data/data.js'
import { displayUsers } from './script.js'

const getSessionData = () =>
  JSON.parse(window?.sessionStorage.getItem('users')) || resetData

const saveToSession = (update) =>
  window?.sessionStorage.setItem('users', JSON.stringify(update))

export const deleteUser = (name) => {
  const newUserData = getSessionData().filter((user) => user.name !== name)

  document.querySelector('.all-users').innerHTML = ''

  displayUsers(newUserData)

  saveToSession(newUserData)
}

export const resetAll = () => {
  window.sessionStorage.removeItem('users')
  saveToSession(resetData)

  displayUsers(resetData)
}
