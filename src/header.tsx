import clsx from 'clsx'
import './header.css'

type HeaderType = {
    title: string
    num?: number
}

const Header = ({ title, num }: HeaderType) => {
    return (
        <h1 className={`title ${num === 10 ? 'red' : ''}`}>
            Hello World,{title}
            {num}
        </h1>
    )
}
export default Header
