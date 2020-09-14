var blog_list = new Vue({
	el: '#js-grid-list',
	data: {
		// The layout mode, possible values are "grid" or "list".
		layout: 'grid',

		list_view: [{
			title: 'Galaxy Note 20 UltraとGalaxy S20+はどっちを買うべき？(比較 ...',
			url: 'https://inakagadget.com/galaxynote20-vs-galaxys20plus/',
			image: {
				'large': 'https://inakagadget.com/wp-content/uploads/2020/08/B3355C9A-6652-46EF-A5FA-E98E4EBB64EB-1280x960.jpeg',
				'small': 'https://inakagadget.com/wp-content/uploads/2020/08/B3355C9A-6652-46EF-A5FA-E98E4EBB64EB-1280x960.jpeg'
            }, 
            number: 12
		}, {
			title: 'Samsung Galaxy S20, 20 Plus and S20 Ultra Specifications ...',
			url: 'https://www.androidcentral.com/samsung-galaxy-s20-specifications',
			image: {
				'large': 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/02/galaxy-s20-all-models-grey-4.jpg?itok=_PDb70A7',
				'small': 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/02/galaxy-s20-all-models-grey-4.jpg?itok=_PDb70A7'
            }, 
            number: 15
		}, {
			title: 'THE LAST OF US 2 Gameplay Demo (E3 2018) - YouTube',
			url: 'https://www.youtube.com/watch?v=4XqN_hMlFyY',
			image: {
				'large': 'https://i.ytimg.com/vi/4XqN_hMlFyY/maxresdefault.jpg',
				'small': 'https://i.ytimg.com/vi/4XqN_hMlFyY/maxresdefault.jpg'
            }, 
            number: 1
		}, {
			title: 'PS5: Sony anuncia su PlayStation 5 y decenas de juegos',
			url: 'https://www.elmundo.es/tecnologia/videojuegos/2020/06/11/5ee28db721efa0bb628b46fe.html',
			image: {
				'large': 'https://phantom-elmundo.unidadeditorial.es/c7d1b8fad42cba84e72d4e1e5e11416c/resize/746/f/jpg/assets/multimedia/imagenes/2020/06/11/15919100847394.jpg',
				'small': 'https://phantom-elmundo.unidadeditorial.es/c7d1b8fad42cba84e72d4e1e5e11416c/resize/746/f/jpg/assets/multimedia/imagenes/2020/06/11/15919100847394.jpg'
            }, 
            number: 09
		}, {
			title: 'God of War (for PlayStation 4) Review & Rating | PCMag.com',
			url: 'https://www.pcmag.com/reviews/god-of-war-for-playstation-4',
			image: {
				'large': 'https://assets.pcmag.com/media/images/494597-god-of-war-for-playstation-4.jpg?width=1920&height=1080',
				'small': 'https://assets.pcmag.com/media/images/494597-god-of-war-for-playstation-4.jpg?width=1920&height=1080'
            }, 
            number: 11
		}, {
			title: 'Fortnite: Cómo derrotar a Iron Man en Stark Industrie',
			url: 'https://dlprivateserver.com/fortnite-como-derrotar-a-iron-man-en-stark-industries-desafio-de-la-semana-3/',
			image: {
				'large': 'https://dlprivateserver.com/wp-content/uploads/2020/09/Fortnite-C%C3%B3mo-derrotar-a-Iron-Man-en-Stark-Industries-Desaf%C3%ADo-780x470.jpeg',
				'small': 'https://dlprivateserver.com/wp-content/uploads/2020/09/Fortnite-C%C3%B3mo-derrotar-a-Iron-Man-en-Stark-Industries-Desaf%C3%ADo-780x470.jpeg'
            }, 
            number: 08
		}]
	}
});