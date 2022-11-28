import React from 'react'

function Purchase({image, text1, text2}) {
  return (
    <>
    <div style={{
      margin: "50px auto",
      display: "flex",
      alignItems:"center", 
      justifyContent: "center"
    }}>
      <img style={{width:"217px", height: "217px"}} src={image} alt="test" />
    </div>
    <h3 style={{
      margin: "auto",
      textAlign: "center",
      fontWeight: "700",
    fontSize: "17px",
    color: "#fff"
}}
    >
    {text1}
    </h3>
    <h3 style={{
      margin: "auto",
      textAlign: "center",
      fontWeight: "700",
    fontSize: "17px",
    color: "#8197a4"
}}>
   {text2}
    </h3>
    </>
  )
}

export default Purchase
