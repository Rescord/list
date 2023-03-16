const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const spisok = document.querySelector('.spisok');

btn1.onclick = function() {
    let dataOfUser = prompt('Введите что-нибудь');
    newLi = document.createElement('li');
    newLi.innerHTML = dataOfUser;
    spisok.append(newLi);
    
};

btn2.onclick = function() {
    if(spisok.hasChildNodes()){
        spisok.removeChild(spisok.lastChild);
    } else {
        alert("Нечего удалять");
    }
 };
