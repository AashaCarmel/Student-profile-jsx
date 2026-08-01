import React from 'react'


function Studentprofile() {
 const names=["Aasha","THEEKSHI"];
 const ages=[23,21];
 const department="Computer Science";
 const marks=[89,90];

 const getGrade=()=>{
    return marks[1]>=80? "Pass":"Fail";
 
 };
 return (
    
    <div className="card">
        <h1>Student Profile</h1>
        <h2>Welcome,{names[1]}</h2>
        <p>Age:{ages[1]}</p>
        <p>Department:{department}</p>
        <p>Next year age:{ages[1]+1}</p>
        <p>Result:{getGrade()}</p>
        <p>Scholorship:{marks[1]>=85?"Eligible":"Not Eligible"}</p>
        <h3>Subjects</h3>
        <ul>
         {["React","Java","Python","Javascript"].map((subject,index)=>(
            <li key={index}>{subject}</li>

         ))}

        </ul>
         <button onClick={() => alert("Button Clicked")}>
          Click Me
         </button>
        </div>
 );
  
}

export default Studentprofile
