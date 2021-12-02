function buildFun(n) {
    var res = []

    for (var i = 0; i < n; i++) {


        (function () {

            res.push(function (i) {

                return i;

            })

        })(i);






    }



    return res
}