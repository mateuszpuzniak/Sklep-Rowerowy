import React, { useState, useRef } from 'react'
import CalyBoxZkolorami from './CalyBoxZColorami'

//siodelka
import blackSaddle from './img/brooks-leather/saddle/brooks_saddle_black.png'
import brownSaddle from './img/brooks-leather/saddle/brooks_saddle_brown.png'
import honeySaddle from './img/brooks-leather/saddle/brooks_saddle_honey.png'
//bagaznik
import cargo from './img/cargo/cargo_rack_black.png'
// // lancuchy
import chainIzumiBlack from './img/chains/chain_izumi_black_0.png'
import chainIzumiGold from './img/chains/chain_izumi_gold.png'
import chainIzumiSilver from './img/chains/chain_izumi_silver_0.png'
import chainRustBuster from './img/chains/chain_rustbuster.png'
// //ramy
import frameBlack from './img/frames/frame_black_0.png'
import frameGreen from './img/frames/frame_green_0.png'
import frameOrange from './img/frames/frame_orange_0.png'
import frameRed from './img/frames/frame_red_0.png'
import frameSky from './img/frames/frame_sky_0.png'
import frameRawMatte from './img/frames/frame-raw-matte.png'
// //przednie felgi
import rimFrontBlack from './img/front-rims/rim_front_black.png'
import rimFrontBlue from './img/front-rims/rim_front_blue.png'
import rimFrontRed from './img/front-rims/rim_front_red.png'
import rimFrontSilver from './img/front-rims/rim_front_silver.png'
import rimFrontWhite from './img/front-rims/rim_front_white.png'
// //tylnie felgi
import rimRearBlack from './img/rear-rims/rim-back-black.png'
import rimRearBlue from './img/rear-rims/rim_back_blue.png'
import rimRearRed from './img/rear-rims/rim_back_red.png'
import rimRearSilver from './img/rear-rims/rim_back_silver.png'
import rimRearWhite from './img/rear-rims/rim_back_white.png'
// // kierownica 1
import brooksTapeBlackBull from './img/handle-bar/bull/brooks_tape_black_bull.png'
import brooksTapeBrownBull from './img/handle-bar/bull/brooks_tape_brown_bull.png'
import brooksTapeHoneyBull from './img/handle-bar/bull/brooks_tape_honey_bull.png'
import handlebarBullBlack from './img/handle-bar/bull/handlebar_bull_black_1.png'
// // kierownica 2
import brooksGripBlackCafe from './img/handle-bar/cafe/brooks_grip_black_cafe.png'
import brooksGripBrownCafe from './img/handle-bar/cafe/brooks_grip_brown_cafe.png'
import brooksGripHoneyCafe from './img/handle-bar/cafe/brooks_grip_honey_cafe.png'
import handlebarCafeBlack from './img/handle-bar/cafe/handlebar_cafe_black_1.png'
// // kierownica 3
import brooksTapeBlackDrop from './img/handle-bar/drop/brooks_tape_black_drop.png'
import brooksTapeBrownDrop from './img/handle-bar/drop/brooks_tape_brown_drop.png'
import brooksTapeHoneyDrop from './img/handle-bar/drop/brooks_tape_honey_drop.png'
import handlebarDropBlack from './img/handle-bar/drop/handlebar_drop_black_1.png'
// // kierownica 4
import brooksGripBlackRise from './img/handle-bar/riser/brooks_grip_black_riser.png'
import brooksGripBrownRise from './img/handle-bar/riser/brooks_grip_brown_riser.png'
import brooksGripHoneyRise from './img/handle-bar/riser/brooks_grip_honey_riser.png'
import handlebarRiseBlack from './img/handle-bar/riser/handlebar_riser_black_0.png'
// //amortyzaroty
import headsetKingBlack from './img/headset/headset_king_black.png'
import headsetKingBlue from './img/headset/headset_king_blue.png'
import headsetKingMango from './img/headset/headset_king_mango.png'
import headsetKingRed from './img/headset/headset_king_red.png'
import headsetKingSilver from './img/headset/headset_king_silver.png'
// //szprychy hamulce i pedaly
import componentsBlack from './img/pedals-straps/components_black_0.png'
import componentsSilver from './img/pedals-straps/components_silver_0.png'
// //opony zwykle
import tiresGatorskin from './img/tires/tires_gatorskin.png'
import tiresGrandprix from './img/tires/tires_grandprix.png'
import tiresStandard from './img/tires/tires_standard.png'
// //opony kolorowe
import tiresRubinoBlue from './img/tires/Vittoria-Rubino/tires_rubino_blue.png'
import tiresRubinoRed from './img/tires/Vittoria-Rubino/tires_rubino_red.png'
import tiresRubinoYellow from './img/tires/Vittoria-Rubino/tires_rubino_yellow.png'

function MyComponent() {
	const [brooksBullImages, setBrooksBullImages] = useState({
		'Wybierz opcje': null,
		'Czarna kierownica': brooksTapeBlackBull,
		'Brązowa kierownica': brooksTapeBrownBull,
		'Miodowa kierownica': brooksTapeHoneyBull,
	})
	const [brooksCafeImages, setBrooksCafeImages] = useState({
		'Wybierz opcje': null,
		'Czarna kierownica': brooksGripBlackCafe,
		'Brązowa kierownica': brooksGripBrownCafe,
		'Miodowa kierownica': brooksGripHoneyCafe,
	})
	const [brooksDropImages, setBrooksDropImages] = useState({
		'Wybierz opcje': null,
		'Czarna kierownica': brooksTapeBlackDrop,
		'Brązowa kierownica': brooksTapeBrownDrop,
		'Miodowa kierownica': brooksTapeHoneyDrop,
	})
	const [brooksRiseImages, setBrooksRiseImages] = useState({
		'Wybierz opcje': null,
		'Czarna kierownica': brooksGripBlackRise,
		'Brązowa kierownica': brooksGripBrownRise,
		'Miodowa kierownica': brooksGripHoneyRise,
	})
	const [handleBarImages, setHandleBarImages] = useState({
		'Wybierz opcje': null,
		'Kierownica Rise': handlebarRiseBlack,
		'Kierownica Drop': handlebarDropBlack,
		'Kierownica Cafe': handlebarCafeBlack,
		'Kierownica Bull': handlebarBullBlack,
	})
	const [saddleImages, setSaddleImages] = useState({
		'Wybierz opcje': null,
		'Czarne siodełko': blackSaddle,
		'Brązowe siodełko': brownSaddle,
		'Miodowe siodełko': honeySaddle,
	})
	const [cargoImages, setCargoImages] = useState({
		'Wybierz opcje': null,
		Bagażnik: cargo,
	})
	const [chainImages, setChainImages] = useState({
		'Wybierz opcje': null,
		'Czarny łańcuch': chainIzumiBlack,
		'Złoty łańcuch': chainIzumiGold,
		'Srebrny łańcuch': chainIzumiSilver,
		'Nierdzewny łańcuch': chainRustBuster,
	})
	const [frameImages, setFrameImages] = useState({
		'Wybierz opcje': null,
		'Czarna rama': frameBlack,
		'Zielona rama': frameGreen,
		'Pomarańczowa rama': frameOrange,
		'Czerwona rama': frameRed,
		'Niebieska rama': frameSky,
		'Matowa rama': frameRawMatte,
	})
	const [rimFrontImages, setRimFrontImages] = useState({
		'Wybierz opcje': null,
		'Przednia czarna felga': rimFrontBlack,
		'Przednia niebieska felga': rimFrontBlue,
		'Przednia czerwona felga': rimFrontRed,
		'Przednia srebrna felga': rimFrontSilver,
		'Przednia biała felga': rimFrontWhite,
	})
	const [rimRearImages, setRimRearImages] = useState({
		'Wybierz opcje': null,
		'Tylnia czarna felga': rimRearBlack,
		'Tylnia niebieska felga': rimRearBlue,
		'Tylnia czerwona felga': rimRearRed,
		'Tylnia srebrna felga': rimRearSilver,
		'Tylnia biała felga': rimRearWhite,
	})
	const [headsetKingImages, setHeadsetKingImages] = useState({
		'Wybierz opcje': null,
		'Amortyzator czarny': headsetKingBlack,
		'Amortyzator niebieski': headsetKingBlue,
		'Amortyzator pomarańczowy': headsetKingMango,
		'Amortyzator czerwony': headsetKingRed,
		'Amortyzator srebrny': headsetKingSilver,
	})
	const [componentsImages, setComponentsImages] = useState({
		'Wybierz opcje': null,
		'Szprychy, pedały czarne': componentsBlack,
		'Szprychy, pedały srebrne': componentsSilver,
	})
	const [tiresImages, setTiresImages] = useState({
		'Wybierz opcje': null,
		'Opony Gatorskin': tiresGatorskin,
		'Opony Grandprix': tiresGrandprix,
		'Opony Standard': tiresStandard,
	})
	const [coloredTiresImages, setColoredTiresImages] = useState({
		'Wybierz opcje': null,
		'Opony Rubino niebieskie': tiresRubinoBlue,
		'Opony Rubino czerwone': tiresRubinoRed,
		'Opony Rubino żółte': tiresRubinoYellow,
	})
	const [selectedImages, setSelectedImages] = useState([])

	const brooksBullRef = useRef(null)
	const brooksCafeRef = useRef(null)
	const brooksDropRef = useRef(null)
	const brooksRiseRef = useRef(null)
	let handlebarsRef

	const handleButtonClick = (image, selector) => {
		setSelectedImages(prev => ({
			...prev,
			[selector]: image,
		}))
	}

	return (
		<section>
			<div>
				<p style={{ fontSize: '33px', textAlign: 'center', fontWeight: 'bold', padding: '40px' }}>
					SKONFIGURUJ SWÓJ ROWER
				</p>
				<div
					className='container'
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
					<div className='bikeElements' style={{ position: 'relative', width: '100%', height: '500px' }}>
						{Object.keys(selectedImages).map((selector, index) => {
							const image = selectedImages[selector]
							if (!image) {
								return null
							}

							return (
								<img
									key={image}
									src={image}
									alt='Wybierz odpowiedni element'
									style={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
										maxWidth: '100%',
										maxHeight: '100%',
										zIndex: index + 1,
									}}
								/>
							)
						})}
					</div>

					<div
						style={{
							height: 'auto',
							flexWrap: 'wrap',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'flex-start',
							margin: '50px',
						}}>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>KIEROWNICE</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select
									ref={handlebarsRef}
									onChange={event => {
										if (event.target.value === 'Wybierz opcje') {
											brooksRiseRef.current.disabled = true
											brooksDropRef.current.disabled = true
											brooksCafeRef.current.disabled = true
											brooksBullRef.current.disabled = true
										} else if (event.target.value === 'Kierownica Rise') {
											brooksRiseRef.current.disabled = false
											brooksBullRef.current.disabled = true
											brooksCafeRef.current.disabled = true
											brooksDropRef.current.disabled = true
										} else if (event.target.value === 'Kierownica Drop') {
											brooksDropRef.current.disabled = false
											brooksBullRef.current.disabled = true
											brooksCafeRef.current.disabled = true
											brooksRiseRef.current.disabled = true
										} else if (event.target.value === 'Kierownica Cafe') {
											brooksCafeRef.current.disabled = false
											brooksBullRef.current.disabled = true
											brooksDropRef.current.disabled = true
											brooksRiseRef.current.disabled = true
										} else if (event.target.value === 'Kierownica Bull') {
											brooksBullRef.current.disabled = false
											brooksCafeRef.current.disabled = true
											brooksDropRef.current.disabled = true
											brooksRiseRef.current.disabled = true
										}
										handleButtonClick(handleBarImages[event.target.value], 'handleBar')
									}}>
									<option value='Wybierz opcje'>Wybierz opcje</option>
									<option value='Kierownica Rise'>Kierownica Rise</option>
									<option value='Kierownica Drop'>Kierownica Drop</option>
									<option value='Kierownica Cafe'>Kierownica Cafe</option>
									<option value='Kierownica Bull'>Kierownica Bull</option>
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>KOLORY KIEROWNICY RISE</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select
									ref={brooksRiseRef}
									name='brooksRise'
									onChange={event => handleButtonClick(brooksRiseImages[event.target.value], 'brooksRiser')}>
									{Object.keys(brooksRiseImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>KOLORY KIEROWNICY DROP</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select
									ref={brooksDropRef}
									name='brooksDrop'
									onChange={event => handleButtonClick(brooksDropImages[event.target.value], 'brooksDrop')}>
									{Object.keys(brooksDropImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>KOLORY KIEROWNICY CAFE</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select
									ref={brooksCafeRef}
									name='brooksCafe'
									onChange={event => handleButtonClick(brooksCafeImages[event.target.value], 'brooksCafe')}>
									{Object.keys(brooksCafeImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>KOLORY KIEROWNICY BULL</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select
									ref={brooksBullRef}
									name='brooksBull'
									onChange={event => handleButtonClick(brooksBullImages[event.target.value], 'brooksBull')}>
									{Object.keys(brooksBullImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>

						<CalyBoxZkolorami>
							<span className='center'>
								<strong>RAMY</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select onChange={event => handleButtonClick(frameImages[event.target.value], 'frame')}>
									{Object.keys(frameImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>

						<CalyBoxZkolorami>
							<span className='center'>
								<strong>PRZEDNIA FELGA</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select onChange={event => handleButtonClick(rimFrontImages[event.target.value], 'rimFront')}>
									{Object.keys(rimFrontImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>TYLNIA FELGA</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select onChange={event => handleButtonClick(rimRearImages[event.target.value], 'rimRear')}>
									{Object.keys(rimRearImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>AMORTYZATORY</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select onChange={event => handleButtonClick(headsetKingImages[event.target.value], 'headsetKing')}>
									{Object.keys(headsetKingImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>ŁAŃCUCHY</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select onChange={event => handleButtonClick(chainImages[event.target.value], 'chain')}>
									{Object.keys(chainImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>OPONY</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select onChange={event => handleButtonClick(tiresImages[event.target.value], 'tires')}>
									{Object.keys(tiresImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>OPONY KOLOWOE</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select onChange={event => handleButtonClick(coloredTiresImages[event.target.value], 'coloredTires')}>
									{Object.keys(coloredTiresImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>SIODEŁKO</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select onChange={event => handleButtonClick(saddleImages[event.target.value], 'saddle')}>
									{Object.keys(saddleImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>SZPRYCHY, HAMULCE</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select onChange={event => handleButtonClick(componentsImages[event.target.value], 'components')}>
									{Object.keys(componentsImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>BAGAŻNIK</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select onChange={event => handleButtonClick(cargoImages[event.target.value], 'cargo')}>
									{Object.keys(cargoImages).map(key => (
										<option key={key} value={key}>
											{key}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
					</div>
				</div>
			</div>
		</section>
	)
}
export default MyComponent
