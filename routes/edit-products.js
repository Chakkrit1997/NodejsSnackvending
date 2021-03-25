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
        //console.log(req.body);
        //update to firebase
        var str = String("nowsnack/s" + snackid);
        var up = database.ref(str);
        console.log(up);
        up.update({ name: snackname, price: price, amount: amount }).then(function () {
            console.log("Success!");
            res.redirect("/edit");
        }).catch(function (error) {
            console.log("Update error : " + error.message);

        })        
    }

}