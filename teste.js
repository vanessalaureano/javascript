window.onload = function() {
    var bot = document.getElementById("bt");
    bot.onclick = function(){
        n = ;
        m = ;
        res = 0;
        if (n>m) {
            t=n;
        } else {
            t=m;
        }
        for (i=1; i<=t; i++){
            res += i*i;
        }
        document.getElementById("txtres") = res;
    }
}