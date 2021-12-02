function buildFun(n) {
	let shooters = [];

	let i = 0;
	while (i < n) {
		let j = i;
		let shooter = function () {
			return j;
		};
		shooters.push(shooter);
		i++;
	}

	return shooters;
}