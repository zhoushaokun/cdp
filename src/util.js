const calAverageColor = (areaData) => {
	const colorCal = {
		r: 0,
		g: 0,
		b: 0,
		count: 0,
	}
	for (let j = 0; j < areaData.length; j += 32) {
		colorCal.count += 1;
		colorCal.r += areaData[j];
		colorCal.g += areaData[j+1];
		colorCal.b += areaData[j+2];
	}

	colorCal.r = ~~(colorCal.r / colorCal.count);
	colorCal.g = ~~(colorCal.g / colorCal.count);
	colorCal.b = ~~(colorCal.b / colorCal.count);
	return `rgb(${colorCal.r}, ${colorCal.g}, ${colorCal.b})`;
}

module.exports = {
    calAverageColor,
};