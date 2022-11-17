import { Button } from "@mui/material";

const Checkout = () => {
    return (
        <div class='checkout'>
            <h1>CUSTOMER INFORMATION</h1>
            <div class="  mb-3 py-5 px-5">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />

            </div>
            <hr />
            <h1>SHIPPING DETAILS</h1>
            <div class="mb-3 py-5 px-5">
                <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="FULL NAME" />
                <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="STRET ADDRESS" />
                <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="CITY" />
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="PINCODE" />

                <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <Button  variant='contained' color="primary">ORDER CONFIRM</Button>
        </div>
    );
}

export default Checkout;