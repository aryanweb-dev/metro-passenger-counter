let countEL = document.getElementById("count-el")
console.log(countEL)

let count = 0

function increment(){
    count = count + 1
    countEL.innerText = count
}

function save(){
    console.log(count)
}

let saveEL = document.getElementById("save-el")
console.log(saveEL)

function save(){
    
    let counter = (" " + count + " - ")

    // saveEL.innerText += counter OR
    saveEL.textContent += counter

   // document.getElementById("save-btn").innerText = count - 1
   // document.getElementById("count-el").innerText = 0
   // count = -1

   countEL.textContent = 0
   count = 0

    console.log(count)
}