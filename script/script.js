/** ====================form section========================= */
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You can add form validation here

  // Simulate a form submission
  setTimeout(() => {
      document.getElementById('formMessage').textContent = "Thank you for contacting me!";
      document.getElementById('contactForm').reset();
  }, 500);
});



/*================toggle icon navbar===========*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
        
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}

/*=============toggle section active link========== */

let section=document.querySelectorAll('section');
let navlink=document.querySelectorAll('header nav a');

window.onscroll=()=>{
   SpeechRecognitionResult.forEach(sec =>{
       let top=window.scrollY;
       let offset=sec.offsetTop-150;
       let height=sec.offsetHeight;
       let id=sec.getAttribut('id');

     if(top >= offset && top < offset+height){
        navlink.forEach.apply(links =>{
           links.classList.remove('active');
           document.querySelector('header nar a[href*='+id+']').classList.add('active');     
       });
     };
  });

  /*===================sticky navbar===================== */

  let header=document.queryselector('header');
  header.classList.toggle('sticky',window.scroll > 100);

  /*==========================remove toggle icon and navbar */

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('action');
};


/**=====================scroler========================  */
