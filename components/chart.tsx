
import { useState, useEffect } from 'react';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface iChart {time: string[], values: number[]}

async function load()
{
	function d1(s: string) { return s.replace(/(\d+)-(\d+)-(\d+)/, '$3-$2-$1') }

	const response = await fetch('http://asuprog.ru/g.php?g=g1');
	const data = await response.json();

	return data.t.reduce((acc: iChart, cur: string[]) =>
	{
		acc.time.push(d1(cur[0]));
		acc.values.push(parseFloat(cur[1]));

		return acc;
	}, {time: [], values: []})
}

export default function Chart()
{
	const [chart, setChart] = useState<iChart>({} as iChart);

	useEffect(() => { (async () => setChart(await load()))() }, []);

	const options = {
		accessibility: {enabled: false},
		chart: {type: 'spline', zoomType: 'x', styledMode: true},
		title: {text: '<b>График Напряжения Холодильной Установки</b>'},
		subtitle: {text: 'Для увеличения - нажмите на график и потяните'},
		credits: {enabled: false},
		legend: {enabled: false},
		tooltip: {crosshairs: true},
		plotOptions: {spline: {lineWidth: 2, states: {hover: {lineWidth: 2}}, marker: {enabled: false}}},
		xAxis: {categories: chart.time, title: {text: 'Дата и время'}},
		yAxis: {title: {text: 'Напряжение, В'}},
		series: [{name: ' ', data: chart.values}]
	}

	return <div style={{display: 'inline-block', width: '90%'}}>
		{chart.values ? <HighchartsReact highcharts={Highcharts} options={options} /> : <h1>Загрузка...</h1>}
	</div>
}
