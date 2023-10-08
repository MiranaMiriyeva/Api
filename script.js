let tbodyElem = document.querySelector("table tbody")
let loadElem = document.querySelector(".loading")
let dataElem = document.querySelector(".data")
let detailElem = document.querySelector(".details")
let xElem = document.querySelector(".details button")
let modalItem = document.querySelector(".modal-item")
let url = "https://dummyjson.com/users"
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
            <button class="btn btn-secondary">Update</button></td>
          </tr> `
     });

 })
 .catch((err)=> alert(err))
 .finally(()=>{
    setTimeout(()=>{
   loadElem.style.display = "none"
   dataElem.style.display = "block"},2000)

 })

 function getdetails(id){
    detailElem.style.display = "flex"
    fetch(`https://dummyjson.com/users/${id}`)
    .then(res=>res.json())
    .then(data =>{console.log(data)
        
            modalItem.innerHTML = `
            <h2>${data.username}</h2>
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

