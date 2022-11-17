import { Card } from "@mui/material";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {


    let [products, setProducts] = useState(null);
    let [totalCartPrice, settotalCartPrice] = useState(0);
    let nos = useRef();
    let totalItems = 0;



    useEffect(() => {
        decideCartFinalPrice();

    }, [])

    let decideCartFinalPrice = () => {
        let cartArray = localStorage.getItem("productsCart");
        cartArray = JSON.parse(cartArray);
        setProducts(cartArray);

        let a = cartArray.map((prod) => { return { no: 1, } })

        const x = cartArray.reduce((finalprice, prod) => { return finalprice + (prod.price.cost * prod.nos) }, 0);
        settotalCartPrice(x);
    }



    let handleDelete = (deleteid) => {
        let where = 0;
        let items = products
        items.forEach((prod, i) => {
            if (prod.id == deleteid) {
                where = i;
            }
        });
        items.splice(where, 1);
        console.log(items);
        items = JSON.stringify(items);
        localStorage.setItem("productsCart", items);
        decideCartFinalPrice();
    }


    let handleChangeNos = (accessingId) => {
        let where = 0;
        let items = products
        items.forEach((prod, i) => {
            if (prod.id == accessingId) {
                where = i;
            }
        });
        items[where].nos = totalItems;
        decideCartFinalPrice();

    }
    

    return (
        <div className="">
            <div className=" cart-head d-flex px-5">
                <h1>CART</h1>
                <h1>TOTAL PRICE</h1>
            </div>
            <hr />
            <div className="cart">
                {products && products.map((product) => {
                    return (
                        <div className="cartDetails px-5 py-5">
                            <Card variant="outlined " sx={{ width: 320 }}> <img src={product.url} alt="image not found" /></Card>
                            <div>
                                <Card variant="outlined " sx={{ width: 320 }}>
                                    <h2>{product.title.shortTitle}</h2>
                                    <h1>MRP : &#8377;{product.price.mrp}</h1>
                                    <h3>Offer Price: &#8377; {product.price.cost}  </h3>
                                    <h3>discount%: {product.price.discount}  </h3></Card>

                                <input type="number"  ref={nos} onChange={(e)=>{totalItems=e.target.value;}} onBlur={()=>{handleChangeNos(product.id)}}/>


                                <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => { handleDelete(product.id) }}>
                                    DELETE
                                </Button>
                            </div>

                        </div>)

                })}


               <div className="total-cart">
               <input type="text" value={totalCartPrice} readOnly />
               </div>

            </div >





        </div>);
}

export default Cart;