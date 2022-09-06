const formatListing = (posts) => {
	return posts
		.map((item) => {
			let price = parseFloat(item.imobilienFelder.preis); //?.replace(/'/g, '')
			let marker_price = price && formatNumber(price);

			if (!price) {
				price = 'ASK';
				marker_price = 'ASK';
			}

			return {
				id: item.id,
				gallery: item.imobilienFelder.gallerie
					?.map((item) => {
						return { src: item.sourceUrl };
					})
					.slice(0, 8),
				title: item.title,
				price: price.toLocaleString('de-CH', { maximumFractionDigits: 2 }),
				marker_price: marker_price,
				currency: 'CHF',
				rooms: item.imobilienFelder.zimmer,
				space: item.imobilienFelder.grose,
				address: item.imobilienFelder.addresse,
				location: {
					lat: item.imobilienFelder.adresseOnMap?.latitude,
					long: item.imobilienFelder.adresseOnMap?.longitude,
				},
			};
		})
		.filter((item) => item.location.lat !== undefined);
};

const formatNumber = (number) => {
	let unitList = ['', 'K', 'M', 'G'];
	let parsedNumber = parseFloat(number);
	let sign = Math.sign(parsedNumber);
	let unit = 0;

	while (Math.abs(parsedNumber) > 1000) {
		unit = unit + 1;
		parsedNumber = Math.floor(Math.abs(parsedNumber) / 100) / 10;
	}

	return sign * Math.abs(parsedNumber) + unitList[unit];
};

export { formatListing, formatNumber };
