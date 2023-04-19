import React from 'react'

function Navigation() {


    return (
        
            <nav style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'#A8DADC',padding:'20px 0px' }}>
                <div className='container' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ul style={{listStyleType: 'none', maxWidth:'1400px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <li style={{display: 'inline-block',padding:'0px 90px'}}><a href='#'><p className='logo'><span style={{color:'#457B9D'}}><span style={{color:'#1D3557'}}>S</span>kle<span style={{color:'#1D3557'}}>p</span></span> <span style={{color:'#457B9D'}}>z</span> <span style={{color:'#457B9D'}}><span style={{color:'#1D3557'}}>R</span>owerami<span style={{color:'#1D3557'}}>i</span></span></p></a></li>
                        <li style={{display: 'inline-block',padding:'0px 60px'}}><a href='#'><p className='about'>O nas</p></a></li>
                        <li style={{display: 'inline-block',padding:'0px 60px'}}><a className='konfiguration' href='#'>Konfigurator</a></li>
                        <li style={{display: 'inline-block',padding:'0px 60px'}}><a className='contact' href='#'>Kontakt</a></li>
                        <li style={{display: 'inline-block',padding:'0px 60px'}}><a className='login' href='#'>Zaloguj Się</a></li>
                    </ul>
                </div>
            </nav>
        
    )
}
export default Navigation
