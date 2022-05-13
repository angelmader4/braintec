
// 'Enero',
const MONTHS = [
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre'
];

function months(config) {
	var cfg = config || {};
	var count = cfg.count || 12;
	var section = cfg.section;
	var values = [];
	var i, value;

	for (i = 0; i < count; ++i) {
		value = MONTHS[Math.ceil(i) % 12];
		values.push(value.substring(0, section));
	}

	return values;
}

const COLORS = [
	'#4dc9f6',
	'#f67019',
	'#f53794',
	'#537bc4',
	'#acc236',
	'#166a8f',
	'#00a950',
	'#58595b',
	'#8549ba'
];

function color(index) {
	return COLORS[index % COLORS.length];
}

function transparentize(value, opacity) {
	var alpha = opacity === undefined ? 0.5 : 1 - opacity;
	return colorLib(value).alpha(alpha).rgbString();
}

const CHART_COLORS = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(0, 153, 204)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

const NAMED_COLORS = [
	CHART_COLORS.red,
	CHART_COLORS.orange,
	CHART_COLORS.yellow,
	CHART_COLORS.green,
	CHART_COLORS.blue,
	CHART_COLORS.purple,
	CHART_COLORS.grey,
];

function namedColor(index) {
	return NAMED_COLORS[index % NAMED_COLORS.length];
}

function newDate(days) {
	return DateTime.now().plus({ days }).toJSDate();
}

function newDateString(days) {
	return DateTime.now().plus({ days }).toISO();
}

function parseISODate(str) {
	return DateTime.fromISO(str);
}

Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

const DATA_COUNT = 4;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

function logNumbers (num,flex = 2){
	const data = [];
	for (let i = 0; i < num; ++i) {
		data.push(Math.ceil(Math.random() * 10.0 * flex));
	}

	return data;
};

const actions = [
	{
		name: 'Randomize',
		handler(chart) {
			chart.data.datasets.forEach(dataset => {
				dataset.data = logNumbers(chart.data.labels.length,4);
			});
			chart.update();
		}
	},
];

const labels = months({ count: 4 });
const data = {
	labels: labels,
	datasets: [
		{
			label: 'Meses',
			data: logNumbers(DATA_COUNT),
			borderColor: NAMED_COLORS,
			backgroundColor: NAMED_COLORS,
			fill: false,
		},
	]
};

const config = {
	type: 'line',
	data: data,
	options: {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Usuarios Activos'
			}
		},
		scales: {
			x: {
				display: true,
			},
			y: {
				display: true,
				type: 'logarithmic',
			}
		}
	},
};


const configBar = {
	type: 'bar',
	data: data,
	options: {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Usuarios Activos'
			}
		},
		scales: {
			x: {
				display: true,
			},
			y: {
				display: true,
				type: 'logarithmic',
			}
		}
	},
};


const configVehiculos = {
	type: 'pie',
	data: data,
	options: {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Usuarios Activos'
			}
		},
		scales: {
			x: {
				display: true,
			},
			y: {
				display: true,
				type: 'logarithmic',
			}
		}
	},
};

const configEspera = {
	type: 'line',
	data: data,
	options: {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: 'Usuarios Activos'
			}
		},
		scales: {
			x: {
				display: true,
			},
			y: {
				display: true,
				type: 'logarithmic',
			}
		}
	},
};

setTimeout(() => {
	config.data.datasets[0].data = logNumbers(DATA_COUNT, 3);
	configBar.data.datasets[0].data = logNumbers(DATA_COUNT, 7);
	configVehiculos.data.datasets[0].data = logNumbers(DATA_COUNT,1);
	configEspera.data.datasets[0].data = logNumbers(DATA_COUNT,5);
}, 1000);

new Chart(document.getElementById("myAreaChart"), config);
new Chart(document.getElementById("myBarChart"), configBar);
new Chart(document.getElementById("myChartVehiculos"), configVehiculos);
new Chart(document.getElementById("myBarVehiculos"), configEspera);
