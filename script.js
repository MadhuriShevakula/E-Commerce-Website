
const bar=document.getElementById('bar');
const close=document.getElementById('close');

const nav=document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => { 
        console.log("abc");
      nav.classList.add('active');
      console.log("cdf");
    });
  }
  
if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    });
  }