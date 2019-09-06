// I placed each function to retrieve data from the txt file seperately,
// i did this so each component would have its own code and if one component was down it would not effect others.
// I can easily place the whole code into one function and am capable of doing this.
//
// I struggled with having a submenu created, i wanted to map through the array of menu options and then if the submenu
// was true on a certain object in that array, i would place a function with onclick handler to show the submenu, had difficulty
// with coding this but am continuing to learn how to do this however wanted to hand my work back due to time constraints

//handles loading
window.addEventListener("load", function(){
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
})


//creates Title
fetch("assets/json.txt")
.then(function(response){
  return response.text()
})
.then(function(data){
  data = JSON.parse(data)
  document.getElementById('title').innerHTML = data.title;
})
.catch(function(err){
  console.log(err)
})

//creates Heading
fetch("assets/json.txt")
.then(function(response){
  return response.text()
})
.then(function(data){
  data = JSON.parse(data)
  document.getElementById('heading').innerHTML = data.header;
})
.catch(function(err){
  console.log(err)
})

//creates Menu & Submenu
fetch("assets/json.txt")
.then(function(response){
  return response.text()
})
.then(function(data){
  data = JSON.parse(data)
  data.menu.map(menuLink => {
    let link = menuLink.title
    let hrefURL = menuLink.url
    let nav = document.getElementById('navlinks')
    let a = document.createElement("a");
    let liLink = document.createElement('li')
    liLink.classList.add("link-1")
    a.setAttribute("href", "#") //can use hrefURL instead of "#" if more pages created
    a.textContent = link
    liLink.appendChild(a)
    nav.appendChild(liLink)
  })
})
.catch(function(err){
  console.log(err)
})

//creates MAIN
fetch("assets/json.txt")
.then(function(response){
  return response.text()
})
.then(function(data){
  data = JSON.parse(data)
  document.getElementById('paragraph').innerHTML = data.body;
})
.catch(function(err){
  console.log(err)
})

//createsFooter
fetch("assets/json.txt")
.then(function(response){
  return response.text()
})
.then(function(data){
  data = JSON.parse(data)
  document.getElementById('footer').innerHTML = data.footer;
})
.catch(function(err){
  console.log(err)
})
