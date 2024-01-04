import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'

type ProductListItemType = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
}: ProductListItemType) => {
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>('green')

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }
    const changeColor = () => {
        setColor((prevState) => (prevState === 'green' ? 'red' : 'green'))
    }
    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt={title} />
                </div>
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                <div className="product-features">Type:{type}</div>
                <div className="product-features">Capacity: {capacity}GB</div>

                <div className="product-price">${price}</div>
                <p>
                    Color:<span className={color}>{color}</span>
                </p>
                <button onClick={changeColor}>Change color</button>
                <div className="product-quantity">
                    <Button variant="outlined" onClick={onDecrementClick}>
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button variant="outlined" onClick={onIncrementClick}>
                        +
                    </Button>
                </div>
                <div className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
