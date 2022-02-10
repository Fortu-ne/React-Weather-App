import {useState, useEffect} from 'react';
import React from 'react';

const CurrentTime = () => {




   const [time, setTime]=useState();
   const [date, setDate] = useState();
  

  const getTime = () => {

    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();
    let date = now.getDate();
    let day = now.getDay();
    let month = now.getMonth();
    let year = now.getFullYear();
    

    const DaysOfWeek = [ 'Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
    const Day = DaysOfWeek[day];

    const Months = ['January', 'Februaruy','March','April','May','June','July','August','September','October','November','December'];
    const Month =Months[month];

    let session =(hour <12)? "AM" :"PM";

    date = (date < 10)? "0"+date : date;
     hour = (hour < 10)? "0"+ hour:  hour;
     minute = (minute < 10)? "0"+ minute:  minute;
     hour = (hour < 10)? "0"+ hour:  hour;
     seconds = (seconds < 10)? "0"+ seconds : seconds; 
  
     setTime(hour +":"+ minute + ":" + seconds+"  "+session);
     setDate(Day + ", "+date +" "+Month+" "+year);


  
  }

  useEffect(() => {
    const timerID = setInterval(() => getTime(), 1000);
    return function cleanup(){
        clearInterval(timerID)
       
    }
  })
  

  return <div>
    <h2>{date}</h2>
    <h1>{time}</h1>
  </div>;
};


export default CurrentTime;
