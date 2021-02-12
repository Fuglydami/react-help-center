import './App.css'
import content from './data.js'
// import { useState } from 'react'
import Footer from './Footer'
// import { FaBeer } from 'react-icons/fa'

//documents
// added updated
function App() {
  return (
    <main>
      <section className="container">
        <div className="inputSection">
          <h2 className="title">
            What can we help you <br /> with
          </h2>
        </div>
        <div className="inputField">
          <input type="search" placeholder="   &#61447;  Find anything" />
        </div>
        <section className="mainContent">
          <h3>Top questions</h3>
          <div className="grid-container">
            {content.map((data) => {
              const { id, button, title, titleOptions } = data
              return (
                <div key={id}>
                  <div className="grid1">
                    <p className="p-button">{button}</p>
                  </div>
                  <div className="title-container">
                    <h2 className="h2-title">{title}</h2>
                    {titleOptions.map((titleOption) => {
                      return <p className="h2-titleOptions">{titleOption}</p>
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <Footer />
        </section>
      </section>
    </main>
  )
}

export default App
