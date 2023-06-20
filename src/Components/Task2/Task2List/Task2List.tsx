import Task2ListItem from '../Task2ListItem/Task2ListItem'
import cardsArrey from 'Utils/Task2'
import './Task2List.scss'

type Props = {
    addCardToCart: (price: number) => void
    currenscyNumber: number
    currenscyText: string
}

type Card = {
    id: number
    title: string
    desc: string
    price: number
    img: string
}

const Task2List = ({
    addCardToCart,
    currenscyNumber,
    currenscyText,
}: Props) => {
    return (
        <div className="task_2_content">
            {cardsArrey.map(({ id, title, desc, price, img }: Card) => (
                <div className="child" key={id}>
                    <Task2ListItem
                        id={id}
                        title={title}
                        desc={desc}
                        price={price}
                        img={img}
                        addCardToCart={addCardToCart}
                        currenscyNumber={currenscyNumber}
                        currenscyText={currenscyText}
                    />
                </div>
            ))}
        </div>
    )
}
export default Task2List
