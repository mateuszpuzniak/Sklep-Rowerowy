import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'

function Footer() {
	const phoneNumbers = ['555-345-678']
	const address = 'ul. Przykładowa 1, 00-000 Warszawa'
	const email = 'kontakt@przykladowa-firma.pl'
	const website = 'https://www.sklep-z-pedalami.pl'

	return (
		<footer style={{ backgroundColor: '#A8DADC' }}>
			<div className='container'>
				<div style={{ height: '15vh', marginTop: '100px', display: 'flex', justifyContent: 'space-around' }}>
					<div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', flexDirection: 'column' }}>
						<a href='#'>
							<p className='logo'>
								<span style={{ color: '#457B9D' }}>
									<span style={{ color: '#1D3557' }}>S</span>kle<span style={{ color: '#1D3557' }}>p</span>
								</span>{' '}
								<span style={{ color: '#457B9D' }}>z</span>{' '}
								<span style={{ color: '#457B9D' }}>
									<span style={{ color: '#1D3557' }}>P</span>edałam<span style={{ color: '#1D3557' }}>i</span>
								</span>
							</p>
						</a>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItem: 'center',
							flexDirection: 'column',
							fontSize: '20px',
						}}>
						<p><b>Telefon:</b> {phoneNumbers}</p>
						<p><b>Adres:</b> {address}</p>
						<p><b>Email:</b> {email}</p>
						<p>
							<b>Strona internetowa:</b> <a href={website}>{website}</a>
						</p>
					</div>
					<div className='social-media' style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', flexDirection: 'column',fontSize:'30px' }}>
						<a href='https://www.facebook.com'>
							<FaFacebookSquare style={{color:'#3b5998'}}/>
						</a>
						<a href='https://www.twitter.com'>
							<FaTwitterSquare style={{color:'#1da1f2'}}/>
						</a>
						<a href='https://www.instagram.com'>
							<FaInstagramSquare style={{color:'#c13584'}}/>
						</a>
					</div>
				</div>
                <p style={{ display: 'flex', justifyContent: 'center'}}>© 2023 Sklep z pedałami</p>
			</div>
		</footer>
	)
}

export default Footer
