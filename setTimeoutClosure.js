function x(){
    for ( var i=1; i<=5; i++ ) {
        function close(x){
            setTimeout(function(){
                console.log(x);
            },2000);
            close(i);
        }
    }

}
x();