import React from 'react'

import wheel from './img/oponaAnimowana.png'

function Text() {
	return (
		<section style={{ borderBottom: '3px solid black' }}>
			<div className='container' style={{ marginTop: '60px', marginBottom: '100px' }}>
				<div style={{ padding: '60px' }}>
					<h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px', fontSize: '30px' }}>
						Internetowy Sklep Rowerowy
					</h2>
					<p style={{ fontSize: '22px', textAlign: 'center' }}>
						Sklep powstał, aby zapewnić Naszym Klientom szeroki wybór rowerów i akcesoriów. Staramy się sprostać Państwa
						oczekiwaniom i z pietyzmem dobieramy kolejne kolekcje jednośladów różnych producentów. Tworzą one
						niepowtarzalną ofertę, w której każdy odnajdzie swój wymarzony rower. Zależy nam, aby każdy z Was mógł
						obejrzeć, porównać i wybrać odpowiedni dla siebie rower. Aby było to możliwe podzieliliśmy je na
						poszczególne kategorie. Dla udogodnienia stworzyliśmy wyszukiwarkę ''Znajdź rower dla siebie''. Dzięki temu
						rozwiązaniu, w przejrzysty i szybki sposób odnajdziesz właściwy rower.
					</p>
				</div>
				<div
					style={{
						width: '1000px',
						height: 'auto',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex',
						position: 'relative',
					}}>
					<img src={wheel} alt='Koło rowerowe' className='rotating' />
				</div>
				<div style={{ padding: '60px' }}>
					<h2 style={{ textAlign: 'center', marginBottom: '5px', fontSize: '30px' }}>Szeroka oferta rowerów</h2>
					<p style={{ fontSize: '22px', textAlign: 'center' }}>
						W naszej ofercie znajdą Państwo rowery górskie, szosowe, miejskie, trekkingowe, fitness, przełajowe i BMX.
						Proponujemy również rowery dziecięce i młodzieżowe. Turystyczne bądź wyczynowe — stworzone z myślą o
						pasjonatach, jak i zawodowcach. Pozwalające na jazdę zarówno po utwardzonych, asfaltowych nawierzchniach,
						jak i typowo kamienistych terenach. Nasz sklep rowerowy pozwala Państwu na wybór odpowiedniego modelu,
						dopasowanego do potrzeb i oczekiwań.
					</p>
				</div>
				<div style={{ padding: '60px' }}>
					<h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px', fontSize: '30px' }}>
						Bogactwo akcesoriów i części rowerowych
					</h2>
					<p style={{ fontSize: '22px', textAlign: 'center' }}>
						Posiadamy również wszystko to, co niezbędne do wyposażenia Waszego roweru. Od bagażników, błotników, bidonów
						i koszyków, przez dzwonki, liczniki, lusterka i osłony, aż po zaawansowane narzędzia, pedały, pokrowce i
						zabezpieczenia. W naszej ofercie znajdują się również foteliki rowerowe, torby, sakwy i plecaki. Oferta
						pokrywa zapotrzebowanie każdej grupy cyklistów. Znajdziesz u nas ekwipunek turystyczny na dłuższe wyprawy,
						jak również akcesoria do rowerów miejskich i dziecięcych. Nawet zaawansowani kolarze, ceniący minimalizm,
						docenią dedykowaną im ofertę.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Text
