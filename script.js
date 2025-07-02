

let val=['','','','','','','',''];
let gradeval=[];
let gradepoints=0;
let cgpa;
const popup=document.getElementById('pop');
let respcheck=0;

document.getElementById("btn").onclick=function(){
         let i;
         for(i=0;i<8;i++){
              val[i]=''+document.getElementById(''+i).value;
              if (val[i].toUpperCase()==='O'){
                 document.getElementById('r'+i).textContent='succes';
                 gradeval[i]=10; 
                 }
              else if(val[i].toUpperCase()==='A+'){
                 document.getElementById('r'+i).textContent='succes';
                 gradeval[i]=9; 
              }
              else if(val[i].toUpperCase()==='A'){
                 document.getElementById('r'+i).textContent='succes';
                 gradeval[i]=8; 
              }
              else if(val[i].toUpperCase()==='B+'){
                 document.getElementById('r'+i).textContent='succes';
                 gradeval[i]=7; 
              }
              else if(val[i].toUpperCase()==='B'){
                 document.getElementById('r'+i).textContent='succes';
                 gradeval[i]=6; 
              }
              else if(val[i].toUpperCase()==='C'){
                 document.getElementById('r'+i).textContent='succes';
                 gradeval[i]=5; 
              }
              else if(val[i].toUpperCase()==='F'){
                 document.getElementById('r'+i).textContent='succes';
                 gradeval[i]=0; 
              }
              else{
                 document.getElementById('r'+i).textContent='error';
                 gradeval[i]=0;
                 respcheck+=1;
              }
            }
      gradepoints+=((4*gradeval[0])+(3*gradeval[1])+(3*gradeval[2])+(2*gradeval[3])+(4*gradeval[4])+(1*gradeval[5])+(3*gradeval[6])+(1*gradeval[7]));
      cgpa=(gradepoints/21);
      
      if(respcheck===0){
      document.getElementById('info').textContent='Your CGPA is:';
      document.getElementById('cgpa').textContent=''+cgpa;
      }
      else{
      document.getElementById('info').textContent='Check your grades and try again';
      respcheck=0
      gradepoints=0
      }

}

document.getElementById("btn").addEventListener("click", () =>{
   popup.classList.add("open");
})

document.getElementById("clsbtn").addEventListener("click", () =>{
   popup.classList.remove("open");
})
