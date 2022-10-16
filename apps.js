// const loadData = (dataLemited )=>{
//     const url=`https://openapi.programming-hero.com/api/phones?search=a`
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>displayAllPhone(data.data , dataLemited))
// }

const serchPhone = (scerchText , dataLemited)=>{
    
    const url=`https://openapi.programming-hero.com/api/phones?search=${scerchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayAllPhone(data.data , dataLemited))
}
const noPhone= document.getElementById('no-phn-msg')



const  displayAllPhone= (phones , dataLemited)=>{
   
    const phoneContainer= document.getElementById('allphone-container')
    const showAllbtn= document.getElementById('show-all')
    console.log(phones.length)
    if(dataLemited  && phones.length> 10){
        phones=phones.slice(0,10)
        console.log(phones)
        showAllbtn.classList.remove('d-none')
        
    }

    else{

        showAllbtn.classList.add('d-none')
    }

// error Messages.

    if(phones.length==0){
        noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none')
    }
   
   
 
    


    phoneContainer.innerHTML='';
   phones.forEach(phone=>{

    const newDiv= document.createElement('div')
    newDiv.innerHTML=`
    <div class="card h-100">
            <img src=${phone.image} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
             
            </div>
            <div class="card-footer">
            <button onClick=moreData('${phone.slug}') type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#PhoneDetailModel">Details</button>
            </div>
          </div>
    
    
    
    `;
    phoneContainer.appendChild(newDiv);

   });

   toggleSpiner(false);
 
};
 


// const searchBtn= ()=>{
    
//     const searchField = document.getElementById('scerch-field')
//     const scerchText= searchField.value
    
 
//     serchPhone(scerchText, 10)
//    
//  }


document.getElementById('search-btn').addEventListener('click',function(){
    toggleSpiner(true);
    processScerchField(10)
    // searchBtn()
})


const moreData=(id)=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
  
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhoneDEtails(data.data))
}

const displayPhoneDEtails= phone=>{
 const modalTitel= document.getElementById('PhoneDetailModelLabel')
 modalTitel.innerHTML= `
  <h2>Brand: ${phone.brand}</h2>
  <img src=${phone.image} alt="">
 
 ` 

}


  document.getElementById('btn-show-all').addEventListener('click', function(){

    processScerchField()
  })


const toggleSpiner= isLoading=>{
    const lodarSection= document.getElementById('lodar')
    if(isLoading){
        lodarSection.classList.remove('d-none')
    }

    else{
        lodarSection.classList.add('d-none')
    }
}


  serchPhone('a')
// loadData ()