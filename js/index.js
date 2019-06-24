var count = 0;
function Button_Click(){
    var progressbar = document.getElementById('progressbar');
    count++;
    console.log(count);
    if(count === 1){
        progressbar.value = progressbar.max/3;
    }else if(count === 2){
        progressbar.value = progressbar.max*2/3;
    }else if(count === 3){
        progressbar.value = progressbar.max;
    }else if(count === 4){
        window.location.reload();
    }
}