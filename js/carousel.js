document.addEventListener('DOMContentLoaded', () => {
    var leftarrow = document.getElementById('leftarrow');
    var rightarrow = document.getElementById('rightarrow');
    var root_custom= document.getElementById('root-custom');
    leftarrow.addEventListener('click', ()=>{
        root_custom.scrollLeft=root_custom.scrollLeft-196;
    })
    rightarrow.addEventListener('click', ()=>{
        root_custom.scrollLeft=root_custom.scrollLeft+196;
    })

});