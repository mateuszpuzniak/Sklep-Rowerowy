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
	const imagesData = [
		{
			id: 1,
			name: 'Kierownica Bull',
			options: [
				{ name: 'Czarna kierownica', value: brooksTapeBlackBull },
				{ name: 'Brązowa kierownica', value: brooksTapeBrownBull },
				{ name: 'Miodowa kierownica', value: brooksTapeHoneyBull },
			],
		},
		{
			id: 2,
			name: 'Kierownica Cafe',
			options: [
				{ name: 'Czarna kierownica', value: brooksGripBlackCafe },
				{ name: 'Brązowa kierownica', value: brooksGripBrownCafe },
				{ name: 'Miodowa kierownica', value: brooksGripHoneyCafe },
			],
		},
		{
			id: 3,
			name: 'Kierownica Drop',
			options: [
				{ name: 'Czarna kierownica', value: brooksTapeBlackDrop },
				{ name: 'Brązowa kierownica', value: brooksTapeBrownDrop },
				{ name: 'Miodowa kierownica', value: brooksTapeHoneyDrop },
			],
		},
		{
			id: 4,
			name: 'Kierownica Rise',
			options: [
				{ name: 'Czarna kierownica', value: brooksGripBlackRise },
				{ name: 'Brązowa kierownica', value: brooksGripBrownRise },
				{ name: 'Miodowa kierownica', value: brooksGripHoneyRise },
			],
		},
		{
			id: 5,
			name: 'Kierownice',
			options: [
				{ name: 'Kierownica Rise', value: handlebarRiseBlack },
				{ name: 'Kierownica Drop', value: handlebarDropBlack },
				{ name: 'Kierownica Cafe', value: handlebarCafeBlack },
				{ name: 'Kierownica Bull', value: handlebarBullBlack },
			],
		},
		{
			id: 6,
			name: 'Siodełko',
			options: [
				{ name: 'Czarne siodełko', value: blackSaddle },
				{ name: 'Brązowe siodełko', value: brownSaddle },
				{ name: 'Miodowe siodełko', value: honeySaddle },
			],
		},
		{
			id: 7,
			name: 'Bagażnik',
			options: [{ name: 'Bagażnik', value: cargo }],
		},
		{
			id: 8,
			name: 'Łańcuch',
			options: [
				{ name: 'Czarny łańcuch', value: chainIzumiBlack },
				{ name: 'Złoty łańcuch', value: chainIzumiGold },
				{ name: 'Srebrny łańcuch', value: chainIzumiSilver },
				{ name: 'Nierdzewny łańcuch', value: chainRustBuster },
			],
		},
		{
			id: 9,
			name: 'Rama',
			options: [
				{ name: 'Czarna rama', value: frameBlack },
				{ name: 'Zielona rama', value: frameGreen },
				{ name: 'Pomarańczowa rama', value: frameOrange },
				{ name: 'Czerwona rama', value: frameRed },
				{ name: 'Niebieska rama', value: frameSky },
				{ name: 'Matowa rama', value: frameRawMatte },
			],
		},
		{
			id: 10,
			name: 'rimFrontImages',
			options: [
				{ name: 'Przednia czarna felga', value: rimFrontBlack },
				{ name: 'Przednia niebieska felga', value: rimFrontBlue },
				{ name: 'Przednia czerwona felga', value: rimFrontRed },
				{ name: 'Przednia srebrna felga', value: rimFrontSilver },
				{ name: 'Przednia biała felga', value: rimFrontWhite },
			],
		},
		{
			id: 11,
			name: 'rimRearImages',
			options: [
				{ name: 'Tylnia czarna felga', value: rimRearBlack },
				{ name: 'Tylnia niebieska felga', value: rimRearBlue },
				{ name: 'Tylnia czerwona felga', value: rimRearRed },
				{ name: 'Tylnia srebrna felga', value: rimRearSilver },
				{ name: 'Tylnia biała felga', value: rimRearWhite },
			],
		},
		{
			id: 12,
			name: 'headsetKingImages',
			options: [
				{ name: 'Amortyzator czarny', value: headsetKingBlack },
				{ name: 'Amortyzator niebieski', value: headsetKingBlue },
				{ name: 'Amortyzator pomarańczowy', value: headsetKingMango },
				{ name: 'Amortyzator czerwony', value: headsetKingRed },
				{ name: 'Amortyzator srebrny', value: headsetKingSilver },
			],
		},
		{
			id: 13,
			name: 'componentsImages',
			options: [
				{ name: 'Szprychy, pedały czarne', value: componentsBlack },
				{ name: 'Szprychy, pedały srebrne', value: componentsSilver },
			],
		},
		{
			id: 14,
			name: 'coloredTiresImages',
			options: [
				{ name: 'Opony Rubino niebieskie', value: tiresRubinoBlue },
				{ name: 'Opony Rubino czerwone', value: tiresRubinoRed },
				{ name: 'Opony Rubino żółte', value: tiresRubinoYellow },
                { name: 'Opony Gatorskin', value: tiresGatorskin },
				{ name: 'Opony Grandprix', value: tiresGrandprix },
				{ name: 'Opony Standard', value: tiresStandard },
			],
		},
	]

	const brooksBullRef = useRef(null)
	const brooksCafeRef = useRef(null)
	const brooksDropRef = useRef(null)
	const brooksRiseRef = useRef(null)
	let handlebarsRef

	const [selectedImages, setSelectedImages] = useState({})

	const handleSelectChange = (event, selector) => {
		const images = imagesData.find(images => images.id === selector)
		const selectedOption = images.options.find(option => option.value === event.target.value)
		const selectedImage = selectedOption ? selectedOption.value : null
		setSelectedImages(prev => ({
			...prev,
			[selector]: selectedImage,
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
					<div className='container'
						style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%',padding:'20px 0px'}}>
						<p style={{ padding: '10px', fontSize: '25px', fontWeight: 'bold' }}>
							Wybierz odpowiednie dla siebie komponenty w celu utworzenia wymarzonego roweru:
						</p>
					</div>
					<div
						style={{
							margin: '0px 20px 20px 20px',
							display: 'flex',
							overflow: 'auto',
							width: '100%',
							height: '100%',
							backgroundColor: '#bababa',
                            borderRight:'5px solid black',
                            borderLeft:'5px solid black',
                            borderTop:'4px solid black'
						}}>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>KIEROWNICE</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select ref={handlebarsRef} style={{ width: 'auto' }} onChange={event => handleSelectChange(event, 5)}>
									<option value=''>Wybierz kierownice</option>
									{imagesData[4].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>KOLOR RISE</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select
									ref={brooksRiseRef}
									id='4'
									style={{ width: 'auto' }}
									onChange={event => handleSelectChange(event, 4)}>
									<option value=''>Kolor Rise</option>
									{imagesData[3].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>KOLOR DROP</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select
									ref={brooksDropRef}
									id='3'
									style={{ width: 'auto' }}
									onChange={event => handleSelectChange(event, 3)}>
									<option value=''>Kolor Drop</option>
									{imagesData[2].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>KOLOR CAFE</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select
									ref={brooksCafeRef}
									id='2'
									style={{ width: 'auto' }}
									onChange={event => handleSelectChange(event, 2)}>
									<option value=''>Kolor Cafe</option>
									{imagesData[1].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>KOLOR BULL</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select
									ref={brooksBullRef}
									id='1'
									style={{ width: 'auto' }}
									onChange={event => handleSelectChange(event, 1)}>
									<option value=''>Kolor Bull</option>
									{imagesData[0].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
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
								<select style={{ width: 'auto' }} onChange={event => handleSelectChange(event, 9)}>
									<option value=''>Wybierz kolor ramy</option>
									{imagesData[8].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
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
								<select style={{ width: 'auto' }} onChange={event => handleSelectChange(event, 10)}>
									<option value=''>Wybierz kolor przedniej felgi</option>
									{imagesData[9].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
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
								<select style={{ width: 'auto' }} onChange={event => handleSelectChange(event, 11)}>
									<option value=''>Wybierz kolor tylniej felgi</option>
									{imagesData[10].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
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
								<select style={{ width: 'auto' }} onChange={event => handleSelectChange(event, 12)}>
									<option value=''>Wybierz kolor amortyzatorów</option>
									{imagesData[11].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
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
								<select style={{ width: 'auto' }} onChange={event => handleSelectChange(event, 8)}>
									<option value=''>Wybierz kolor łańcucha</option>
									{imagesData[7].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
						<CalyBoxZkolorami>
							<span className='center'>
								<strong>OPONY KOLOROWE</strong>
							</span>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<select style={{ width: 'auto' }} onChange={event => handleSelectChange(event, 14)}>
									<option value=''>Wybierz kolor opon</option>
									{imagesData[13].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
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
								<select style={{ width: 'auto' }} onChange={event => handleSelectChange(event, 6)}>
									<option value=''>Wybierz kolor siodełka</option>
									{imagesData[5].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
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
								<select style={{ width: 'auto' }} onChange={event => handleSelectChange(event, 13)}>
									<option value=''>Wybierz rodzaj szprych</option>
									{imagesData[12].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
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
								<select style={{ width: 'auto' }} onChange={event => handleSelectChange(event, 7)}>
									<option value=''>Wybierz bagażnik</option>
									{imagesData[6].options.map(option => (
										<option key={option.value} value={option.value}>
											{option.name}
										</option>
									))}
								</select>
							</div>
						</CalyBoxZkolorami>
					</div>
					<button>Sprawdź wybór</button>
				</div>
			</div>
		</section>
	)
}
export default MyComponent