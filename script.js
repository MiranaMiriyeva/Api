let tbodyElem = document.querySelector("table tbody")
let loadElem = document.querySelector(".loading")
let dataElem = document.querySelector(".data")
let detailElem = document.querySelector(".details")
let xElem = document.querySelector(".details button")
let modalItem = document.querySelector(".modal-item")
let updateDetailElem = document.querySelector(".update-details")
let updateXElem = document.querySelector(".update-details button")
let updateModalItem = document.querySelector(".update-modal-item")
let userNameElem = document.getElementById("username")
let firsNnameElem = document.getElementById("firstrname")
let lastNameElem = document.getElementById("lastname")
let emailElem = document.getElementById("email")
let phoneNumberElem = document.getElementById("phonenumber")
let updateButtonElem = document.getElementById("updatebutton")
let url = "https://dummyjson.com/users"
let id;
userRender()
 function getdetails(id){
    detailElem.style.display = "flex"
    fetch(`${url}/${id}`)
    .then(res=>res.json())
    .then(data =>{console.log(data)
        
            modalItem.innerHTML = `
            <h2>${data.username}</h2>
            <img class="user-image" src="${data.image}" alt="#">
            <p>Birth Date: ${data.birthDate }</p>
            <p>Gender: ${data.gender}</p>
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
            <p>Company Name: ${data.company.name}</p>
            <p>Company Title: ${data.company.title}</p>
            <p>University: ${data.university}</p>

            `
     
    })
  }
 xElem.addEventListener("click",()=>{
    detailElem.style.display = "none"
 }
 )

 function updateuser(id){
    updateDetailElem.style.display = "flex"
   userNameElem.value = id.username
   userRender()
 }

 updateXElem.addEventListener("click",()=>{
    updateDetailElem.style.display = "none"
 }
 )


 function userRender(){
    fetch(url)
 .then (res => res.json())
 .then (data => {
     console.log(data.users)
     data.users.forEach(element => {
        tbodyElem.innerHTML += `
          <tr>
            <td>${element.id}</td>
            <td>
            <button  class="btn btn-outline-light" onclick = "getdetails(${element.id})">${element.username}</button></td>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
            <td> 
            <button class="btn btn-danger" onclick = "deleteUser(${element.id})">Delete</button>
            <button class="btn btn-secondary"  onclick = "updateuser(${element.id})">Update</button></td>
          </tr> `
          id = element.id
     });

 })
 .catch((err)=> alert(err))
 .finally(()=>{
    setTimeout(()=>{
   loadElem.style.display = "none"
   dataElem.style.display = "block"},2000)

 })

 }