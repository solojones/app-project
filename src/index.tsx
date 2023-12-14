import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// //without jsx
// // const el = React.createElement('h1', { id: 'title' }, 'Hello title')

// //with jsx
// const a = 10
// const el = <h1 id="title"> Hello Title,{a}</h1>

// const App = () =>git {
//     return (
//         <div>
//             <h1>Hello world</h1>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
//                 dolor exercitationem fugiat ea reprehenderit totam nihil modi et
//                 cumque assumenda aperiam non, accusantium voluptatem amet. Id
//                 molestiae autem eveniet dolor!
//             </p>
//         </div>
//     )
// }
type HeaderType = {
    titile: string
    num?: number
}
// interface HeaderType  {
//        titile: string
//     }
const Header = (props: HeaderType) => {
    return (
        <div>
            <h1>
                Hello World,{props.titile}
                {props.num}
            </h1>
        </div>
    )
}
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
            <Header titile="App.js" num={10} />
            <Header titile="React.js" />
            <Content />
        </>
    )
}
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
