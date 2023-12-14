type HeaderType = {
    titile: string
    num?: number
    bgColor: string
    position?: boolean
}

const Header = (props: HeaderType) => {
    return (
        <h1
            style={{
                backgroundColor: props.bgColor,
                color: props.position ? 'white' : 'black',
                padding: '15px',
            }}
        >
            Hello World,{props.titile}
            {props.num}
        </h1>
    )
}
export default Header
