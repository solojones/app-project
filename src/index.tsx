import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                eligendi eveniet quisquam voluptatum nemo ipsum culpa rerum
                ratione odio, animi voluptate deleniti doloribus neque quaerat
                quis eos omnis amet aperiam?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                deleniti iure eos quam assumenda fugit fuga eligendi, non
                recusandae minus itaque quo eveniet qui corporis illo vel
                mollitia eum voluptates!
            </p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Header title="App.js" num={10} bgColor="blue" position />
            <Header title="React.js" bgColor="purple" />
            <Content />
        </>
    )
}
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
