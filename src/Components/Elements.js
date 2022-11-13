import React, { useState } from "react";

function Elements() {
  const [data, setdata] = useState();

  return (
    <>
    <div
      style={{
        display: "flex",
        scrollBehavior: "scroll",
        marginTop: "20px",
        overflow: "scroll",
      }}
    >
      {data.items.map((element, index) => {
        return (
          <div key={index}>
           <ul>
              {index%2 ==0 &&   <li>
            <img style={{
               width: "350px",
               height: "200px",
               margin: "7px",
                borderRadius: "3px"
           }} src={element.image} alt="" />
               </li>}
           </ul>
          </div>
        );
      })}

      
    </div>
    <div
      style={{
        display: "flex",
        scrollBehavior: "scroll",
        marginTop: "20px",
        overflow: "scroll",
      }}
    >
      {data.items.map((element, index) => {
        return (
          <div key={index}>
           <ul>
              {index%2 !==0 &&   <li>
            <img style={{
               width: "350px",
               height: "200px",
               margin: "7px",
                borderRadius: "3px"
           }} src={element.image} alt="" />
               </li>}
           </ul>
          </div>
        );
      })}

      
    </div>
    </>
  );
}

export default Elements;
