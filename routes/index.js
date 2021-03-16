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
        var snackobj = database.ref("nowsnack").once('value').then(function (dataSnapshot) {
            obj = dataSnapshot.val();
            console.log(obj)
            res.render('pages/index2.ejs', {
                title: "Welcome to snack vending",
                value: obj,
            });

        })
        //res.redirect('/');
    }
}