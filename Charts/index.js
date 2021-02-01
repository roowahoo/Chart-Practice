
const dogsOptions={
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
const dogsChart =new ApexCharts(document.querySelector('#bar'),dogsOptions);
dogsChart.render()

const subjectOptions={
    'chart':{
        'type':'pie',
        'height':'100%'
    },

    'series':[10,20,30,40],
    'labels':['English', 'Mathematics', 'Science', 'Art'],
    'colors':['#A7CECB', '#8BA6A9']
}
const subjectChart=new ApexCharts(document.querySelector('#pie'), subjectOptions);
subjectChart.render()
