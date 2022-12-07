function saveToLocalStorage(event) {
    event.preventDefault();
    const amount= event.target.amo.value;
    const description = event.target.des.value;
    const category= event.target.cat.value;
    const obj = {
        amount,
        description,
        category
    }
    localStorage.setItem(obj.description, JSON.stringify(obj))
showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded",()=>
{
    const localStorageObj = localStorage;
    const localStoragekeys = Object.keys(localStorageObj)

    localStoragekeys.forEach(key=>{
        const userDetailString = localStorageObj[key];
        const userDetailObj = JSON.parse(userDetailString);
        showNewUserOnScreen(userDetailObj)
    })
})

function showNewUserOnScreen(user)
{
  

            const parentNode = document.getElementById('list');
            const childHTML = `<li id=${user.description}> ${user.amount} - ${user.description} ${user.category}
                                        <button onclick=deleteUser('${user.description}')> Delete User </button>
                                        <button onclick=editUserDetails('${user.description}','${user.amount}','${user.category}')>Edit User </button>
                                     </li>`

            parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails(descript, amt, ctgry) {

    document.getElementById('des').value = descript;
    document.getElementById('amo').value = amt;
    document.getElementById('cat').value = ctgry;

    deleteUser(descript)
}



function deleteUser(descript) {
    console.log(descript)
    localStorage.removeItem(descript);
    removeUserFromScreen(descript);

}

function removeUserFromScreen(descript) {
    const parentNode = document.getElementById('list');
    const childNodeToBeDeleted = document.getElementById(descript);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}


