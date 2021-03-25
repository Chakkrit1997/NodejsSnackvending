const fs = require('fs');

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
    },
    editSnack: (req, res) => {
        let snackid = req.body.ID;
        let snackname = req.body.fname;
        let price = req.body.price;
        let amount = req.body.amount;

        console.log(req.body);

        res.redirect("/edit");

        //update to firebase
    }

}