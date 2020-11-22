import React from 'react'
import {Component} from 'react'
import './App.css';
import Mycart from './Components/Mycart'
import Card from './Components/Cards'

class App extends Component {
  state=(
{
    store:  [{id:'abc1',
    name:"Laptop-1",
    price:590,
    image:"https://i01.appmifile.com/webfile/globalimg/in/cms/4BAADF0B-B0D8-D9C3-1D38-43BAB1F76080.jpg"},
    {id:'bcac1',
      name:"Laptop-2",
      price:599,
      image:"https://i01.appmifile.com/webfile/globalimg/in/cms/4BAADF0B-B0D8-D9C3-1D38-43BAB1F76080.jpg"},
      {id:'cab3',
        name:"Laptop-3",
        price:799,
        image:"https://i01.appmifile.com/webfile/globalimg/in/cms/4BAADF0B-B0D8-D9C3-1D38-43BAB1F76080.jpg"},
        {id:'nac3',
          name:"Laptop-4",
          price:999,
          image:"https://i01.appmifile.com/webfile/globalimg/in/cms/4BAADF0B-B0D8-D9C3-1D38-43BAB1F76080.jpg"}

  ],
  cart:[]
})
  cart=(id)=>{

    let newcart=this.state.cart
    alert(id)
    if( id in newcart)
    {
      alert("Already added")
    }
    else
    {
    newcart.push(id)
    this.setState({cart:newcart})}


  }
  
  render(){
  return (
    <div className="App">
      <div className="prodlist">
      {this.state.store.map((obj)=>{
        return <Card images={obj.image} name={obj.name} price={obj.price}
         clicked={()=>{this.cart(obj.id)}}/>
      })}
      </div>
      <div className="mycart">
         <Mycart carts={this.state.cart} org={this.state.store}/>
      </div>
    </div>
  );
}
}

export default App;
