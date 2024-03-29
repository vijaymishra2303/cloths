import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProDetails from "./ProDetails"

function MensWear(){
const [arr,setData]=useState([])
useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/women's%20clothing").then((resp)=>{
    resp.json().then((data)=>{ //data string ke form me aya hai ise json me convert kiya hai
     setData(data)
     setData(data.slice(0, 8)); //8 product show krna hai isliye slice method use kiyabhai
    })
    })
},[])


  

    return(
      <div className="container">
      <div className="row">
        {
         arr.map((item)=>
         
      <div key={item.id} className="col-md-3 col-lg-3 col-12">
      <div className="MyCard ">
        <figure>
      <img src={item.image}></img>
      </figure>
     
      <div className="CardText">
<h2>{item.price}</h2>
        <h2>{item.title}</h2>
        {/* <Link to={'/ProDetails/'+item.id}>{item.description}</Link> */}
        <p>{item.description}</p>
         <h6>Category :{item.category}</h6>
         <h6 className="ratingC">Rating :{item.rating.rate}</h6>
        <Link className="MainBtn" to={'/ProDetails/'+item.id}> View Details </Link>
      </div>
      </div>
      </div>
      )}
                    


      </div>
      </div>
    )
}
export default MensWear





