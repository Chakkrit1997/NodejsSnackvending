module.exports = {
    getHomePage: (req, res) => {

        /*database.child("nowsnack").child("s0").get().then(function (snapshot) {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            }
            else {
                console.log("No data available");
            }
        }).catch(function (error) {
            console.error(error);
        });*/
        var value;
        var ref = database.ref("nowsnack/s0").on('value',function(snapshot){
            value = snapshot.val().price;
        });
        //key = varr.child("amount");

        res.render('pages/index2.ejs', {
            title: "Welcome to snack vending",
            value1: ref,
            value2: value
        });
        //res.redirect('/');
    }
}