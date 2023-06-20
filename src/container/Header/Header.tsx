import { Button } from '@mui/material'
import './Header.scss'
import { Link } from 'react-router-dom'
type Props = {}
const Header = (props: Props) => {
    return (
        <div className="Header">
            <div className="buttonsBlock">
                <Button sx={{ backgroundColor: 'white' }} variant="outlined">
                    <Link style={{ textDecoration: 'none' }} to="/">
                        Task1
                    </Link>
                </Button>
                <Button sx={{ backgroundColor: 'white' }} variant="outlined">
                    <Link style={{ textDecoration: 'none' }} to="/task2">
                        Task2
                    </Link>
                </Button>
            </div>
        </div>
    )
}
export default Header
