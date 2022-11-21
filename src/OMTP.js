import React from "react"
import Data from "./Records.json"
import "./OMTP.css"
import image from "./OMTP1.png"

function OMTP(){


  

  return(
    <div className="OMTPDiv">
      <h1>Order Medicines  through Prescription</h1>
      <span className="Border"></span>
    <div className="OMTP">
      
      { Data && Data.OMTP.map(record =>{
      return(
<div  key={record.id}>
  <div className="OMTP__Box">
    <div className="OMTP__BOX__Right">
      <h1> {record.heading} </h1>
      <p>
      {record.para}
      </p>
      <button>{record.btn}</button>
    </div>
    <div className="OMTP__BOX__Left">
      <img src={image} alt="IMAGE" ></img>
    </div>
  </div>
 </div>
 )

    })
  }
  </div>
  </div>
)
}
export default OMTP