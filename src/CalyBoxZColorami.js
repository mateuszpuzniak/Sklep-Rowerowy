import React from 'react'

function CalyBoxZkolorami(props) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				border: '2px solid #0077b6',
				borderRadius: '50px',
				padding: '25px',
				margin: '20px',
				backgroundColor: '#caf0f8',
				boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
				backdropFilter: 'blur(10px)',
			}}>
			{props.children}
		</div>
	)
}

export default CalyBoxZkolorami
