console.log("Script running...")
// Task 1: 
// Select the cshImage div

let csh = document.getElementById("cshImage")

// Add an event listener such that when the div is clicked, you create a new p tag, set the text to "Our new building!" and append it to the div

csh.addEventListener("click", function(event){
  let pTag = document.createElement("p")
  pTag.textContent = "Our new building!"
  csh.appendChild(pTag);
})



// Task 2: 
// Set up the DOM manipulation flow such that when you click the cat button, the cat image is removed.

let cat = document.getElementById("catButton")
let ca = document.getElementById("catImage");
let imag = document.getElementById("images")

cat.addEventListener("click", function(event){
  imag.removeChild(ca)
});

// Set up the DOM manipulation flow such that when you click the dog button, the dog image is removed.

let dog = document.getElementById("dogButton")
let da = document.getElementById("dogImage");

dog.addEventListener("click", function(event){
  imag.removeChild(da)
});


// Task 3: Set up the DOM manipulation flow such that when the add button is clicked, you create a new li tag, set the text to the value of input, and append it to the ul element

let ad = document.getElementById("add");
let friend = document.getElementById("friends");
let unorder = document.getElementById("friendsList")

ad.addEventListener("click", function(event){
let liTag = document.createElement("li");
  liTag.textContent = friend.value;
  unorder.appendChild(liTag);
  })


