const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open);});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const dateInput=document.getElementById("date");
const today=new Date();
dateInput.min=today.toISOString().split("T")[0];

document.getElementById("bookingForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const date=document.getElementById("date").value;
  const guests=document.getElementById("guests").value;
  const time=document.getElementById("time").value;
  const msg=document.getElementById("formMessage");
  if(!name||!date){msg.textContent="Please enter your name and choose a date.";return;}
  const formatted=new Date(date+"T00:00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
  msg.textContent=`Thanks, ${name}! Reservation request for ${guests} on ${formatted} at ${time} received.`;
  e.target.reset();
  dateInput.min=today.toISOString().split("T")[0];
});
