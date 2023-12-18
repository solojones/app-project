import clsx from 'clsx'
import './header.scss'

type HeaderType = {
    title: string
    num?: number
}

const Header = ({ title, num }: HeaderType) => {
    console.log()
    return (
        <h1 className={title}>
            Hello World,{title}
            {num}
        </h1>
    )
}
export default Header
