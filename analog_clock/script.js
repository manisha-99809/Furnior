let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec= document.getElementById('sec');

function displaytime(){
 let date = new Date();

 let h = date.getHours();
 let m = date.getMinutes();
 let s = date.getSeconds();

 let hrotation = 30*h+m/2;
 let mrotation = 6*m;
 let srotation =6*s;

 hr.style.transform=`rotate(${hrotation}deg)`;
 min.style.transform=`rotate(${mrotation}deg)`;
 sec.style.transform=`rotate(${srotation}deg)`; 

}
setInterval(displaytime, 1000);