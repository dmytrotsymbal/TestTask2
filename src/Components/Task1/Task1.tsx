import buttonsArrey from 'Utils/Task1'
import ButtonComponent from './ButtonComp/ButtonComponent'
import './Task1.scss'

type Props = {}

type Button = {
    id: number
    text: string
}

const Task1 = (props: Props) => {
    return (
        <div className="Task1">
            <h2 style={{ textAlign: 'center' }}>Task 1</h2>
            <div className="task1Arrey">
                {buttonsArrey.map(({ id, text }: Button) => (
                    <div className="child" key={id}>
                        <ButtonComponent id={id} text={text} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Task1
