var ar;
var counter = 0;
var interval;

function start() {    
    interval = setInterval(updater, 200);
}

function updater(){

    if ( counter == 0 ){
        t = document.getElementById('t');
        ar = t.value.split(/[ ,\n]+/);
    }
    
    entry = ar[counter]
    counter = counter + 1;
    
    if ( entry != '' && entry != '\n' && entry != undefined  ){
            updateword(entry);
    }
    
    if ( counter >= ar.length ){
        stop();  
    }
    
}

function reset(){
    counter = 0;    
}

function stop(){
    clearInterval(interval);    
}

function updateword(word){
    s = document.getElementById('s');    

    s.innerHTML = word;    
}