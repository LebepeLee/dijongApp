
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Lunch from './components/lunch'



function App() {
  const bfastFood = [{ name: 'Bfast', price: 'R20' },{name:'Toast', price:'R20'},{name:'Rolls',price:'R25'} , 
  {name:'Breakfast',price:'R30'},{name:'Bread',price:'R30'} ,{name:'PanCakes',price:'R25'}]
  const lunchFood = [{name:'Platter',price:'R250'},{name:'burger',price:'R55'}, {name:'foodies',price:'R100'},
    {name:'Fries',price:'R55'}, {name:'Wings',price:'R65'}, {name:'HakeFish',price:'R50'}]
  const supperFood = [{name:'beef',price:'R60'}, {name:'Dumpling',price:'R60'}, {name:'HardBody',price:'R50'}, 
  {name:'MopaniWorms',price:'R45'},{name:'Pasta',price:'R40'} , {name:'SeveralColor',price:'R65'}]
  const [orders, setOrder] = useState([
  ])


  function handleClick(foodName, img, price) {
    console.log(orders)
    // console.log(img)
    // order.push({
    //   name: foodName,img:img
    // 
    // })
    // const savedOrders = orders;
    // savedOrders.push({name: foodName,img:img,price:price})
    //  setOrder(savedOrders)

    setOrder(current => [...current, {
      name: foodName, img: img, price: price

    }])

    console.log(orders)
    localStorage.setItem('orderedfood', JSON.stringify(orders));
    const data = JSON.parse(localStorage.getItem(foodName))
    // window.location.reload()

  }

  // let order =[{img: "./MyImages/Toast.jpg", 
  // name: "Toast"}]


  return (
    <div className="App">

      <div className="container">
        <h1>Breakfast Foodies</h1>
        <Lunch food={bfastFood} display={handleClick} />
        <h1>Lunch Foodies</h1>
        <Lunch food={lunchFood} display={handleClick} />
        <h1>Supper Foodies</h1>
        <Lunch food={supperFood} display={handleClick} />
    

      </div>
      <div className='Order'>
        <div><h1>Oders</h1></div>
        <div className="Cart">


          {orders.map(order => {
            return (
              <div key={order.name}>


                <h3>{order.name + ' ' + order.price}</h3>
                <img src={order.img} />
              </div>

            )

          })}
        </div>
      </div>


    </div>
  );
}

export default App;
