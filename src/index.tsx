import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header'
import Content from './content'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const App = () => {
    return (
        <>
            <Header title="App.js" num={10} />
            <Header title="React.js" />
            <Content p1="Hello wolrd 1" p2="Hello world 2" bgColor="purple" />
            <Content p1="Hello wolrd 3" p2="Hello world 4" bgColor="red" />
            <Content p1="Hello wolrd 5" p2="Hello world 6" bgColor="yellow" />
        </>
    )
}
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
