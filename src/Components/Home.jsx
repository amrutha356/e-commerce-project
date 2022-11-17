
import { useEffect } from "react";
import { useState } from "react";
import Displayproducts from "./Displayproducts";

import Banner from "./Banner"


const Home = () => {

   let [products , setProducts] = useState( null );
   let [pending , setPending] = useState( true );


       let handleCart = ()=>{
        if(localStorage.getItem("productsCart")==null)
        {
            localStorage.setItem("productsCart" , "[]");
        }
    }
   useEffect(()=>{

    
        handleCart();
        setTimeout(()=>{
          fetch("http://localhost:4000/getproducts")
          .then(response => response.json())
          .then((data)=>{ setProducts(data);  setPending(false)  })
        } , 1000)
   } , [] )

    return (
        <div className="home">
          
          <Banner/>
          {pending===true && <h1>Loading....</h1>}
          {products && <Displayproducts products={products}/>}

        </div>
     );
}
export default Home;