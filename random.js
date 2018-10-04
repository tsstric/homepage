exports.randomInt =  function(min, max) {
	min = parseInt(min);
	max = parseInt(max);
	return Math.floor(min + Math.random() * (max - min + 1));
}

