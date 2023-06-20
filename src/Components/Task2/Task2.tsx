import { Button, Container } from '@mui/material'
import Task2List from './Task2List/Task2List'
import { useState } from 'react'
import './Task2.scss'

type Props = {}

type CartDataProps = {
    totalPrice: number
}

const Task2 = (props: Props) => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalPrice: 0,
    })

    const addCardToCart = (price: number) => {
        setCartData((prevState) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

    const [currenscyNumber, setCurrencyNumber] = useState<number>(1)
    const [currenscyTotalNumber, setCurrenscyTotalNumber] = useState<number>(1)
    const [currenscyText, setCurrencyText] = useState<string>('USD')

    const changeCurencyToUAH = () => {
        setCurrencyText(() => 'UAH')
        setCurrencyNumber(37)
        setCurrenscyTotalNumber(37)
    }

    const changeCurencyToUSD = () => {
        setCurrencyText(() => 'USD')
        setCurrencyNumber(1)
        setCurrenscyTotalNumber(1)
    }

    const changeCurencyToEUR = () => {
        setCurrencyText(() => 'EUR')
        setCurrencyNumber(0.98)
        setCurrenscyTotalNumber(0.98)
    }

    const changeCurencyToGBP = () => {
        setCurrencyText(() => 'GBP')
        setCurrencyNumber(0.83)
        setCurrenscyTotalNumber(0.83)
    }

    return (
        <div className="Second_task">
            <Container>
                <h2 className="title_Second_task">Task 2</h2>
                <div className="btns_div">
                    <Button
                        variant="outlined"
                        onClick={() => changeCurencyToUSD()}
                    >
                        USD
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => changeCurencyToEUR()}
                    >
                        EUR
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => changeCurencyToUAH()}
                    >
                        UAH
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => changeCurencyToGBP()}
                    >
                        GBP
                    </Button>
                </div>

                <div>
                    <Task2List
                        addCardToCart={addCardToCart}
                        currenscyNumber={currenscyNumber}
                        currenscyText={currenscyText}
                    />
                </div>

                <h2
                    className="title_total_task_2"
                    style={{ textAlign: 'center' }}
                >
                    Total price: {cartData.totalPrice * currenscyTotalNumber}{' '}
                    {currenscyText}
                </h2>
            </Container>
        </div>
    )
}
export default Task2
