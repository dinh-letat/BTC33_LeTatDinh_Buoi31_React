//rcc
import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div>
                <header className='bg-black text-white text-center'>
                    <div>
                        <p>Start Bootstrap</p>
                    </div>
                    <div style={{display: "flex"}}>
                        <li>
                            <a href="">Play</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </div>
                </header>
            </div>
        )
    }
}
