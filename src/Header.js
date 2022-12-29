import React from 'react'

export default function Header(){
    return (
        <div className='container'>
            <div className='head-part'>

                <h1>HopeLake</h1>
                <div className='icons'>
                    <span>i1</span>
                    <span>i2</span>
                    <span>i3</span>
                </div>
                <div className='list-pages'>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>MENU</li>
                        <li>ORDER</li>
                        <li>CONTACT</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}