import { Button } from '@mui/material'
import './Header.scss'
type Props = {}
const Header = (props: Props) => {
    return (
        <div className="Header">
            <div className="buttonsBlock">
                <Button sx={{ backgroundColor: 'white' }} variant="outlined">
                    Task1
                </Button>
                <Button sx={{ backgroundColor: 'white' }} variant="outlined">
                    Task2
                </Button>
            </div>
        </div>
    )
}
export default Header
