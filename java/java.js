"use strict"

let input1 = document.getElementById(`input1`)
let input2 = document.getElementById(`input2`)
let warning1 =document.getElementById(`warning1`)
let warning2 =document.getElementById(`warning2`)
let button =document.querySelector(`.btn`)



let data = [];
if( localStorage.getItem(`ourbookmark`)!=null)
{
    data=JSON.parse(localStorage.getItem(`ourbookmark`))
    displayData ()
}

 button.addEventListener(`click`,function()
 {
    let userData1=input1.value
    let userData2=input2.value
    let userData=userData1+userData2
   
    if(userData.trim()!=0)
    {
        
        addData ()
        clearData ()
        displayData ()
        warning1.classList.add(`d-none`)
        warning2.classList.add(`d-none`)
     
       
    }
  
    else
    {
        warning1.classList.remove(`d-none`)
        warning2.classList.remove(`d-none`)
      
    }
    

    
 })
 
 
 


input1.addEventListener(`click`,function()
{
    let userData=input1.value
})
function addData ()
{


    if(valodateEntry()==true && input1.value!=``)
    {
        let inputValue= {
            name:  input1.value,
            link:  input2.value
        }
       
        
        data.push(inputValue)
        
        localStorage.setItem(`ourbookmark`,JSON.stringify(data))

        
    }
     
        else
        {
            window.alert(`wrong input
            
            you have to fill both name and url.
            url has to start with https://
            `)
        }
}
function clearData ()

{
    input1.value=``
    input2.value=``
}

function displayData ()
{
    let cartoona1 =``;
    for(let i=0;i<data.length;i++)
    {
        cartoona1+=` 
       
        <div class=" col-4" ><h2 >${data[i].name}</h2>  </div>     
        <div class=" col-4 ">
        <a href="${data[i].link}" target="_blank" >
        <button     class="btn btn-outline-primary">visit</button>
        </a>
       
    </div>
        <div class="col-4">
        
        <button   onclick=" deleteData (${i})" class="btn btn-outline-danger">delete</button>
       
           
        </div>
          </div>  
          
 
 
        `
        
       
        
    }
    document.getElementById(`h1`).innerHTML=(cartoona1)
   
}



 function deleteData (index)
 {
     data.splice(index,1)
     localStorage.setItem(`ourbookmark`,JSON.stringify(data))

     displayData ()
       
 }

function valodateEntry()
{
    let regix =/^(https:\/\/).+$/i
   if ( regix.test(input2.value)==true)
   {
          return true;
   }
    else
    {
        return false;
    }
}




















































