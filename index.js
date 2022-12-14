const ctx = document.getElementById("chart").getContext("2d");
// const addData = function (chart, label, data) {
// 	chart.data.labels.push(label);
// 	chart.data.datasets.forEach((dataset) => {
// 		dataset.data.push(data);
// 	});
// 	chart.update();
// };
const labels = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const data = {
	labels: labels,
	datasets: [
		{
			data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
			label: "",
			backgroundColor: [
				"hsl(10, 79%, 65%)",
				"hsl(10, 79%, 65%)",
				"hsl(186, 34%, 60%)",
				"hsl(10, 79%, 65%)",
				"hsl(10, 79%, 65%)",
				"hsl(10, 79%, 65%)",
				"hsl(10, 79%, 65%)",
			],
			borderColor: [
				"rgb(255, 255, 255))",
				"rgb(255, 255, 255)",
				"rgb(255, 255, 255)",
				"rgb(255, 255, 255)",
				"rgb(255, 255, 255)",
				"rgb(255, 255, 255)",
			],

			borderRadius: 4,
			barThickness: 30,
			hoverBackgroundColor: [
				"hsl(10, 80%, 74%)",
				"hsl(10, 80%, 74%)",
				"hsl(186, 61%, 74%)",
				"hsl(10, 80%, 74%)",
				"hsl(10, 80%, 74%)",
				"hsl(10, 80%, 74%)",
				"hsl(10, 80%, 74%)",
			],
		},
	],
};

const config = {
	type: "bar",
	data: data,
	options: {
		responsive: true,
		maintainAspectRatio: true,
		layout: {},
		// Remove Grid Lines
		scales: {
			x: {
				grid: {
					display: false,
					drawBorder: false, // Remove X-axis Line on leftside
				},
				ticks: { color: "rgba(147, 134, 123, 1)" }, // Change color Labels X-axis
			},

			y: {
				display: false, // Remove space of hidden Y-axis Line on leftside
				grid: {
					display: false,
					drawBorder: false, // Remove Y-axis Line on leftside
				},

				beginAtZero: true,
			},
		},

		onHover: (event, chartElement) => {
			if (chartElement.length === 0) {
				event.native.target.style.cursor = "default";
			} else {
				event.native.target.style.cursor = "pointer";
			}
		},

		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				bodyFont: {
					size: 12,
					weight: "bold",
				},
				// Customize background-color tooltip
				backgroundColor: "rgb(56, 35, 20)",
				// Remove Tooltip Caret
				caretSize: 0,
				// Remove margin under title
				titleMarginBottom: 0,
				callbacks: {
					// Remove Tooltip Title
					title: function (tooltipItems, data) {
						return "";
					},
					label: function (context) {
						let label = context.dataset.label || "";

						if (label) {
							label += ": ";
						}
						if (context.parsed.y !== null) {
							label += new Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "USD",
							}).format(context.parsed.y);
						}
						return label;
					},
				},
			},
		},
		displayColors: false,
	},
};

const myChart = new Chart(ctx, config);
