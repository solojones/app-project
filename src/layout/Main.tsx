import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
        >
            Main
            <Home />
        </Container>
    )
}
export default Main
