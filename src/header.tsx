type HeaderType = {
    title: string
    num?: number
    bgColor: string
    position?: boolean
}

const Header = ({ title, num, bgColor, position }: HeaderType) => {
    return (
        <h1
            style={{
                backgroundColor: bgColor,
                color: position ? 'white' : 'black',
                padding: '15px',
            }}
        >
            Hello World,{title}
            {num}
        </h1>
    )
}
export default Header
