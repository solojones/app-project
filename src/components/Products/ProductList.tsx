import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 15 Pro"
                        description="This is Iphone 15 Pro"
                        capacity="128"
                        type="phone"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 14 Pro"
                        description="This is Iphone 14 Pro"
                        capacity="256"
                        type="phone"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        title="iPhone 13 Pro"
                        description="This is Iphone 13 Pro"
                        capacity="64"
                        type="phone"
                        price={500}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
