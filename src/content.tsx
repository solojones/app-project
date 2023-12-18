type ContentType = {
    p1: string
    p2: string
    bgColor: string
}

const Content = ({ p1, p2, bgColor }: ContentType) => {
    return (
        <div className={bgColor}>
            <p>{p1}</p>
            <p>{p2}</p>
        </div>
    )
}
export default Content
