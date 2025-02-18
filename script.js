// http://api.weatherapi.com/v1/current.json?key=abd345c3ce974922a0390733241506&q=Mumbai&aqi=no

const locationField = document.querySelector(".location h3");
const temperatureField=document.querySelector(".temp h2");
const dateandTimeField=document.querySelector(".time p");
const conditionField=document.querySelector(".condition p");
const searchField=document.querySelector(".search_area");
const form=document.querySelector("form");

form.addEventListener('submit' , searchForLocation);

let target='Lucknow'
const fetchResults= async(targetLocation)=>{
let url=`https://api.weatherapi.com/v1/current.json?key=abd345c3ce974922a0390733241506&q=${targetLocation}&aqi=no`
 
const res= await fetch(url)

const data=await res.json()
console.log(data)

let locationName=data.location.name;
let temp=data.current.temp_c;
let time=data.location.localtime;
let condition=data.current.condition.text;

updateDetails(locationName, temp,time,condition)
}


function updateDetails( locationName,temp, time, condition){
   
    let splitDate=time.split(' ')[0]
    let splitTime =time.split(' ')[1]
    let currentDay=getDayName(new Date(splitDate).getDay())

   
   
    locationField.innerText=locationName
    temperatureField.innerText=temp+ '°';
    dateandTimeField.innerText=`${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText=condition
 


}
 
function searchForLocation(e){
    e.preventDefault()
    target=searchField.value
fetchResults(target)
}

fetchResults(target)


function getDayName(number){
    switch(number){
        case 0:
            return 'Sunday'
            case 1:
            return 'Monday'
            case 2:
            return 'Tuesday'
            case 3:
            return 'Wednesday'
            case 4:
            return 'Thursday'
            case 5:
            return 'Friday'
            case 6:
            return 'Saturday'
            
    }
}