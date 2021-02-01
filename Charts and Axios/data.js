async function loadData(){
let response=await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fake-graph-data');
    let series=response.data
    return series
}