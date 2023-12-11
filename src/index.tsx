import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// //without jsx
// // const el = React.createElement('h1', { id: 'title' }, 'Hello title')

// //with jsx
// const a = 10
// const el = <h1 id="title"> Hello Title,{a}</h1>

const App = () => {
    return (
        <div>
            <h1>Hello world</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                dolor exercitationem fugiat ea reprehenderit totam nihil modi et
                cumque assumenda aperiam non, accusantium voluptatem amet. Id
                molestiae autem eveniet dolor!
            </p>
        </div>
    )
}
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
