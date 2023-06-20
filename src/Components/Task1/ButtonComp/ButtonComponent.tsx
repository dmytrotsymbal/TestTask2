import { Button } from '@mui/material'
import { useState } from 'react'
type Props = {
    id: number
    text: string
}
const ButtonComponent = ({ text }: Props) => {
    const [count, setCount] = useState<number>(0)

    const addCount = () => {
        setCount(count + 1)
    }

    return (
        <Button variant="outlined" onClick={addCount}>
            {text}: {count}
        </Button>
    )
}
export default ButtonComponent
