import arrayOfUsers from "../data/data.js";
import { displayUsers } from "./script.js";

const getSessionData = () =>
  JSON.parse(sessionStorage.getItem("users")) || arrayOfUsers;

const saveToSession = (update) =>
  sessionStorage.setItem("users", JSON.stringify(update));

export const deleteUser = (name) => {
  const newUserData = getSessionData().filter((user) => user.name !== name);

  document.querySelector(".all-users").innerHTML = "";

  displayUsers(newUserData);

  saveToSession(newUserData);
};

export const showOptions = () => {
  const options = document.querySelector(".select");
  const overlay = document.querySelector(".overlay");
  options.classList.toggle("active");
  overlay.classList.toggle("active");

  overlay.addEventListener("click", () => {
    options.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  options.addEventListener("click", () => {
    saveToSession(arrayOfUsers);
    displayUsers(getSessionData());
  });
};
