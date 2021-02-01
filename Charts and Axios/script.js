const options={
    'chart':{
        'type':'bar',
        'height':'100%'
    },
    series:[

    ],
    noData:{
        text: 'Loading...'
    }


}
const chart = new ApexCharts(document.querySelector('#chart'),options)
chart.render()

window.addEventListener('DOMContentLoaded', async ()=>{
    let series = await loadData();
    chart.updateSeries(
        [
            {
                'name':'Temperatures',
                'data': series.temperatures
            }
        ]
    )
    })