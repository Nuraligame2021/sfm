function StartGame() {
  let MyArray = [
    "L4d2",
    "GMOD",
    "TF2",
    "SFM",
    "HF2",
    "PT2",
    "Sigma",
    ":)",
    "Respect"
  ]
MyArray = [...MyArray, ...MyArray]
MyArray.sort(()=> Math.random() - 0.5)
let MDiv =document.getElementById("Valveboard") 
MDiv.innerText = ""
MyArray.forEach(element => {
  let cell = document.createElement("div")
  MDiv.appendChild(cell)
cell.innerText = element
cell.classList.add("cell", "cellHide")
cell.addEventListener("click" ,  ()=> {
Validate(cell)
})
});
}



let Firstword = null
let MyPoints = 0
let MyDivPoints = document.getElementById("points")



function Validate(cell) {
cell.classList.remove("cellHide")
cell.classList.add("cellShown")

if (Firstword == null) {
  setTimeout(()=> {
    Firstword = cell
  }, 300)

}else if (Firstword.innerText == cell.innerText
  && Firstword !== cell) {
    setTimeout(()=> {
      Firstword.style.visibility = "hidden"
    cell.style.visibility = "hidden"

    Firstword = null
  
    }, 300)
  }else {
      setTimeout(() => {
      cell.classList.remove("cellShown")
      cell.classList.add("cellHide")
      Firstword.classList.remove("cellShown")
      Firstword.classList.add("cellHide")
      Firstword = null
      }, 300)
    }
 }
window.onload = StartGame


let littimerP = document.getElementById("times")
let sec = 20
