import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline' //для типу відміни стилів, робить базовий ресет
import Footer from 'container/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Task1 from 'Components/Task1/Task1'
import Task2 from 'Components/Task2/Task2'

type Props = {}

function App(props: Props) {
    return (
        <>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Task1 />} />
                <Route path="/task2" element={<Task2 />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
