let num=0;
function inc(){
    document.querySelector("h2").innerHTML=num=num+1;
}
function dec(){
    if(num==0){
        num=0;
        document.querySelector("h2").innerHTML=num;
    }
    else{
        document.querySelector("h2").innerHTML=num=num-1;
    }
}