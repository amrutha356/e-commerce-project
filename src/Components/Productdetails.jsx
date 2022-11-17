import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded'
import { Button, Card } from "@mui/material";

const Productdetails = () => {

    let { id } = useParams();

    let { data, pending } = useFetch(`http://localhost:4000/getproductsone/${id}`)

    console.log(data, id);
    let handleCart = () => {
        // let addingProduct = JSON.stringify(data);
        let cartArray = localStorage.getItem("productsCart");
        cartArray = JSON.parse(cartArray);
        data.nos = 1;
        cartArray.push(data);
        cartArray = JSON.stringify(cartArray);
        localStorage.setItem("productsCart", cartArray);
        alert("SUCCESSFULLY ADDED")
    }

    return (
        <div className="px-5">
            {pending && <h1>Loading ...............</h1>}

            {data && <div className="product-details  ">

                <div className="d-flex py-5 px-5">
                    <Card variant="outlined " sx={{ width: 320 }} ><img src={data.url} alt="not found" /></Card>
                    <Card variant="outlined " sx={{ width: 1500 }} > <h2>{data.title.longTitle}</h2>
                        <strike> MRP:      &#8377;{data.price.mrp}</strike>
                        <h2>COST:      &#8377;{data.price.cost}</h2>
                        <h2>DISCOUNT%:   {data.price.discount}</h2>
                        <h2>DESCRPITION:    {data.description}</h2>
                        <h2>TAGLINE:     {data.tagline}</h2></Card>
                </div>



                <Button onClick={handleCart} variant="outlined" size='large' startIcon={<ShoppingCartRounded />}>
                    Add to Cart
                </Button>
                <Link to='/checkout'>
                    <Button variant='contained' color='success' size='large'>BUY NOW</Button> </Link>
            </div>}

        </div>);
}

export default Productdetails;