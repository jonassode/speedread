var ar;
var counter = 0;
var interval;
var entry;
var pause = 0;

function start() {    
    interval = setInterval(updater, 200);
}

function updater(){

    if ( counter == 0 ){
        t = document.getElementById('t');
        ar = t.value.split(/[ \n]+/);
    }

    if ( pause == 0 ){
    
        entry = ar[counter]
        counter = counter + 1;
        
        
        if ( entry != '' && entry != '\n' && entry != undefined  ){
            var first_letter = entry.slice(0)
            var last_letter = entry.slice(-1)
            if ( last_letter == "." || last_letter == "," || last_letter == "?" || last_letter == "!" || last_letter == "\"" || first_letter == "\"" ){
                pause = 1;
            }

            updateword(entry);
        }
        
        if ( counter >= ar.length ){
            stop();  
        }
        
    } else {
        pause = 0;
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