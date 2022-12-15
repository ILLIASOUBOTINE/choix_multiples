const container = document.querySelector("form");

console.dir(form);

form.addEventListener("click", (e)=>{
  

  if (counterElem(form) > 5) {
    if(e.target.checked){
      e.target.checked = false;
    }  
  }

  if (counterElem(form) < 1) {
    if(!e.target.checked){
      e.target.checked = true;
    }
  }

  // console.log(counterElem(form));

})



function counterElem(arr) {
  let countre = 0;
  for(let item of arr){
    if (item.checked) {
      countre++;
    }
  }
  return countre;
}






