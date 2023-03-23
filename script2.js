const btnAdd = document.querySelector(".buttons__create");
const btnDelete = document.querySelector(".buttons__delete");
const list = document.querySelector(".list__content");
let a = 0;

btnAdd.onclick = function () {
  let dataOfUser = prompt("Введите то, что захотите");
  newLi = document.createElement("li");
  newLi.innerHTML = dataOfUser;
  newLi.className = "Number" + a++;
  newBtn = document.createElement("button");
  newBtn.innerHTML = "Delete";
  newBtn.className = newLi.className;
  list.append(newLi);
  newLi.append(newBtn);
  newBtn.onclick = function (e) {
    let target = e.target.parentNode;
    target.remove();
  };
};

btnDelete.onclick = function () {
  if (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  } else {
    alert("Нечего удалять");
  }
};
