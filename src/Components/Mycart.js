import React from 'react'

const Mycart=(props)=>{
    const carts=props.carts
    const main=props.org
    console.log(main)
    return(
    <div className="mycart">
  <h2>My cart</h2>
    <ol>
    {carts.map((item)=>{
       let res=main.findIndex(p=>{
           return p.id===item
       })
       return <li>{main[res].name}-<span>₹{main[res].price}</span></li>
    })}
    </ol>
  </div>
    )


}
export default Mycart;