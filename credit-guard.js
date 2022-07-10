const rstExpanderLabel = document.querySelectorAll('input[type="checkbox"]');
let array = Array.from(rstExpanderLabel);

rstExpanderLabel.forEach((el,index)=>{
   el.addEventListener('change',(e)=>{
       if(array.indexOf(el) === array.length - 1){
           el.nextElementSibling.nextElementSibling.classList.toggle('opened')
       }
   })
})
