let addBtn = document.querySelector('.btn1')
let itemList = document.querySelector('.list');
let inputField = document.querySelector('.input');


addBtn.addEventListener('click',()=>{
    var par = document.createElement('p');
    par.innerText = inputField.value;
    par.classList.add('p.styling');
    var delBtn = document.createElement('button');
    delBtn.innerText="Delete";
    delBtn.classList.add('button.styling')
    itemList.appendChild(par);
    itemList.appendChild(delBtn);
    inputField.value = '';
    delBtn.addEventListener('click',()=>{
        itemList.removeChild(par);
        itemList.removeChild(delBtn)
    })
})

