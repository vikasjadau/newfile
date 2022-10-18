

function  addMore(){
    let GivenName=document.getElementById('tboxName').value
let box=document.getElementById('box')

let li=document.createElement('li')
li.textContent = GivenName

let a= document.createElement('a')
a.textContent ='x'
a.style.textDecoration='none'
li.appendChild(a)

 let pos =box.firstElementChild;
 if(pos==null){box.appendChild(li)}
 else{box.insertBefore(li,pos)}


  document.getElementById('tboxName').value="";
  document.getElementById('tboxName').focus();
  document.getElementById('count').innerHTML =  box.childElementCount


}

let btn=document.querySelector('ul')
btn.addEventListener('click',function(e){

    let box = document.getElementById('box');
    let li= e.target.parentNode;
    box.removeChild(li);
    document.getElementById('count').innerHTML =  box.childElementCount;
})