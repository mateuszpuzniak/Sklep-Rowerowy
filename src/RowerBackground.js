import React from 'react'
import bicycle from './img/background/bicycle1920s.jpg'

function RowerBackground() {
	return (
		<section style={{ position: 'relative'}}>
			<div style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0, 0, 0, 0.9)',
					opacity: 0.5,
				}}/>
			<div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
				<p style={{ color: 'white',fontSize:'50px',fontWeight:'bold',textAlign:'center',marginBottom:'30px' }}>Witaj na stronie z rowerami</p>
				<p style={{ color: 'white',fontSize:'50px',fontWeight:'bold',textAlign:'center' }}>Skonfiguruj swój rower do swoich potrzeb</p>
			</div>
			<img src={bicycle} alt='Rower' style={{ width: '100%',height:'100%' }} />
			
		</section>
	)
}

export default RowerBackground
