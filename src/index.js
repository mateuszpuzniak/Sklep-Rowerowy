import React from 'react'
import { createRoot } from 'react-dom/client'
import MyComponent from './czesciRoweroweImg'
import Navigation from './Navigation'
import RowerBackground from './RowerBackground'
import Text from './Tekst'
import Footer from './Footer'

function App() {
	return (
		<div>
			<Navigation></Navigation>
			<RowerBackground></RowerBackground>
			<Text></Text>
			<MyComponent></MyComponent>
			<Footer></Footer>
		</div>
	)
}
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
