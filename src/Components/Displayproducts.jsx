import { Link } from "react-router-dom";
import Sheet from '@mui/joy/Sheet';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';




const Displayproducts = ({ products }) => {

 
  return (
    
    <div className="display-prod">

      <div className="products">
        {
          products.map((product) => {
            return (
              <div className="product" key={product.id} >
                    
                <div key={product.id}>
                <Sheet
                  sx={{
                    width: 300,
                    mx: 'auto', // margin left & right
                    my: 4, // margin top & botom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                  }}  >
                  <Card variant="outlined" sx={{ width: 320 }}>
                    <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>  {product.title.shortTitle}   </Typography>
                    <IconButton
                      aria-label="bookmark Bahamas Islands"
                      variant="plain"
                      // color="neutral"
                      size="sm"
                      sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                      
                    >
                          <Link to='/cart'><ShoppingCartRounded /></Link>
                    </IconButton>
                    <AspectRatio minHeight="400px" maxHeight="400px"sx={{ my: 2 }}>
                      <img
                        src={product.url}
                        loading="lazy"
                        alt=""
                      />
                    </AspectRatio>
                    <Box sx={{ display: 'flex' }}>
                      <div>
                        <Typography level="body3">Total price:</Typography>
                        <Typography fontSize="lg" fontWeight="lg">
                        &#8377; {product.price.cost}
                        </Typography>
                      </div>
                    
                      <Button
                        variant="contained"
                        size="sm"
                        color="primary"
                        aria-label="Explore Bahamas Islands"
                        sx={{ ml: 'auto', fontWeight: 600 }}
                      >
                        <Link to={`/product/${product.id}`} className="view-butn">
                              VIEW
                        </Link>
                      </Button>
          
                    </Box>
                  </Card>
                </Sheet>
                </div>

              </div>)
          })
        }
      </div>
    </div>
  );
}

export default Displayproducts;
