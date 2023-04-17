import React from 'react'

function CalyBoxZkolorami(props) {
	return (
		<div
			style={{
				
				border: '1px solid #0077b6',
				margin:'0px 20px 0px 0px',
				padding: '40px 25px',
				backgroundColor: '#caf0f8',
				
			}}>
			{props.children}
		</div>
	)
}

export default CalyBoxZkolorami
