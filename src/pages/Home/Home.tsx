import { Container } from '@mui/material'
import Task1 from 'Components/Task1/Task1'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Container>
                <Task1 />
            </Container>
        </>
    )
}
export default Home
