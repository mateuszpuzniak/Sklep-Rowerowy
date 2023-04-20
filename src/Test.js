import { useEffect, useState } from 'react'
export default function App() {
	const [kierownica, setKierownica] = useState < string > 'bull'
	const kierwonicaOptions = [
		{
			id: 0,
			type: 'bull',
			availableColors: ['red', 'green', 'blue'],
		},
		{
			id: 1,
			type: 'drop',
			availableColors: ['yellow', 'black', 'dark'],
		},
	]
	const handleChange = e => {
		setKierownica(e.target.value)
	}
	useEffect(() => {
		console.log(kierownica)
	}, [kierownica])
	return (
		<div className='App'>
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<select name='elo' id='elo' onChange={handleChange}>
				{kierwonicaOptions.map(option => {
					return (
						<option key={option.id} value={option.type}>
							{option.type}
						</option>
					)
				})}
			</select>
			<select name='morelo' id='morelo'>
				{kierwonicaOptions
					.find(obj => obj.type === kierownica)
					.availableColors.map(el => {
						return (
							<option key={el} value={el}>
								{el}
							</option>
						)
					})}
			</select>
		</div>
	)
}
