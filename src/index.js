import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Movepicker from './movepicker.jsx'

import css from './index.css';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedColor: 0,
            listOfColors: ['#efefef', '#afafaf', '#45fd21','#efefef', '#afafaf', '#45fd21','#efefef', '#afafaf', '#45fd21','#efefef', '#afafaf', '#45fd21','#efefef', '#afafaf', '#45fd21','#efefef', '#afafaf', '#45fd21'],
            selectedImage: 0,
            listOfImages: ['']
        }
    }

    setNewSelectedColor(selectedColor) {
        this.setState({ selectedColor })
    }

    render() {

        return (
            <section>
                <h1>Movepicker</h1>

                <p>in some cases user could not choice between some options.</p>



                <a href="https://github.com/fluse/react-movepicker" className="docu" target="_blank">Checkout Documentation</a>
                <a href="https://www.npmjs.com/package/react-movepicker" className="npm" target="_blank">NPM Package</a>

                <p>{this.state.selectedColor}</p>
                
                <Movepicker className="move-picker" list={this.state.listOfColors.length} onChange={this.setNewSelectedColor.bind(this)}>
                    <ul>
                        <li>test</li>
                    </ul>
                </Movepicker>

                <br />
                <br />

                <h2>Take a look at other Packages</h2>

                <a href="https://www.npmjs.com/package/react-scroll-bound" className="npm" target="_blank">react-scroll-bound</a>
            </section>
        )
    }
}

const app = document.querySelector("main");
app ? ReactDOM.render(<App />, app) : false;
