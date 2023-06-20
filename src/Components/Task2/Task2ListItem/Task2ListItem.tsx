import { Card, Button } from '@mui/material'
import './Task2ListItem.scss'

type Props = {
    id: number
    title: string
    desc: string
    price: number
    img: string
    currenscyNumber: number
    currenscyText: string
    addCardToCart: (price: number) => void
}
const Task2ListItem = ({
    id,
    title,
    desc,
    price,
    img,
    addCardToCart,
    currenscyNumber,
    currenscyText,
}: Props) => {
    const newPrice = price * currenscyNumber

    return (
        <Card className="card_task_2">
            <img src={img} alt="cardImg" />
            <h2>{title}</h2>
            <p>{desc}</p>
            <h4>
                {newPrice} {currenscyText}
            </h4>
            <Button variant="outlined" onClick={() => addCardToCart(price)}>
                Add to cart
            </Button>
        </Card>
    )
}
export default Task2ListItem
