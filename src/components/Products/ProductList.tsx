import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import { productsArray } from 'utils/productsArray'

type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({ id, title, description, capacity, price, type }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                title={title}
                                description={description}
                                capacity={capacity}
                                type={type}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
