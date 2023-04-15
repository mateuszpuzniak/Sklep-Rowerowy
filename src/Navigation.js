import React from 'react'

function Navigation() {


    return (
        <section>
            <div style={{ width: '100%', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'#A8DADC' }}>
                <div className='container' style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <a href='#'><p className='about'>O nas</p></a>
                    <a className='blog' href='#'>Blog</a>
                    <a href='#'><p className='logo'><span style={{color:'#457B9D'}}><span style={{color:'#1D3557'}}>S</span>kle<span style={{color:'#1D3557'}}>p</span></span> <span style={{color:'#457B9D'}}>z</span> <span style={{color:'#457B9D'}}><span style={{color:'#1D3557'}}>P</span>edałam<span style={{color:'#1D3557'}}>i</span></span></p></a>
                    <a className='konfiguration' href='#'>Konfigurator</a>
                    <a className='contact' href='#'>Kontakt</a>
                </div>
            </div>
        </section>
    )
}
export default Navigation
