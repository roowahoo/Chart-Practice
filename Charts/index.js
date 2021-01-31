
const options={
    'chart':{
        'type':'bar',
        'height':'100%'
    },
    'series':[
        {
        'name':'Dogs adopted',
        'data': [6,4,8,10,20]
    
    }],
        'x-axis':{
        categories:['Jan', 'Feb', 'Mar', 'Apr','May']
    }

}
const chart =new ApexCharts(document.querySelector('#bar'),options);
chart.render()

// const options={
//     'chart':{
//         'type':'pie',
//         'height':'100%'
//     },

//     'series':[10,20,30,40],
//     'labels':['English', 'Mathematics', 'Science', 'Art'],
//     'colors':['#A7CECB', '#8BA6A9']
// }
// const chart=new ApexCharts(document.querySelector('#pie'), options);
// chart.render()
