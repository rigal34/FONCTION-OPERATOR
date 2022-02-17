//commencement de ma calculatrice!!!!!!!!!!!!
let total = 0;

function addition(x) {
    total += x; 
    return total;
}

addition(5);
console.log(total);//affiche 5


////////////////////////////
//CE TYPE DE FONCTION S'OPÈRE SUR CONSOLE POUR POUVOIR FONCTIONNER AVEC CETTE FONCTION!!!!!!

function calc (x,y) {
return x+y;

};

calc(4,9)









function soustraction(x) {
    total -= x; 
    return total;
}


function division(x) {
    if (total === 0){
        return (total = x);
    }else{
        total/= x;
        return total;
    } 
}


function multiplication(x) {
    if (total === 0){
        return (total = x);
    }else{

    total *= x; 
    return total;


    }
}


function reset() {

    total = 0;
    
}