import React from 'react'
import wheel from './img/oponaAnimowana.png'

const GrayWheel = ({}) => {
	return (
		<img
			src={wheel}
			alt='Koło rowerowe'
			className='rotating'
			style={{
				position:'absolute',
				top:'950px',
				left: '-360px',
				zIndex: -999,
				width: '700px',
				height: 'auto',
				pointerEvents: 'none',
				opacity: '0.3'
			}}
		/>
	)
}

export default GrayWheel
