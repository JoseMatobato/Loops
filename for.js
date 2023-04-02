a = 1;
b = 2;

for(a; a<=4108; a){
    if(a<4108){
        document.write(a+", ");
    } else{
        document.write(a);
    }
    a = a+b
    b = b*2-1
}
