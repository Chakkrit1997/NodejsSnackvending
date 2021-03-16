module.exports = {
    editProducts: (req, res) => {
        // var amount;
        // var ref = database.ref("nowsnack/s0").on('value',function(snapshot){
        //     amount = snapshot.val().amount;
        // });

        var snackobj = database.ref("nowsnack").once('value').then(function (dataSnapshot) {
            obj = dataSnapshot.val();
            //console.log(obj)
            res.render('pages/edit-snack.ejs', {
                title: "Welcome to snack vending",
                value: obj,
            });

        })

        // res.render('pages/edit-snack.ejs', {
        //     title: "Welcome to snack vending"
        // });
    }
}