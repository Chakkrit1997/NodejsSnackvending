module.exports = {
    Overviews: (req, res) => {
        // var amount;
        // res.render('pages/overviews.ejs', {
        //     title: "Welcome to snack vending"
        // });

        // var snackabj = database.ref("complete").once('result').then(function (dataSnapshot1) {
        //     abj = dataSnapshot1.val();
            // res.render('pages/overviews.ejs', {
            //     title: "Welcome to snack vending",
            //     result: abj,
            // });
        // })

        // var snackobj = database.ref("nowsnack").once('value').then(function (dataSnapshot) {
        //     obj = dataSnapshot.val();
        //     res.render('pages/overviews.ejs', {
        //         title: "Welcome to snack vending",
        //         value: obj,
        //         // result: abj,
        //     });
        // })

        var snackobj = database.ref().once('value').then(function (dataSnapshot) {
            obj = dataSnapshot.val();
            res.render('pages/overviews.ejs', {
                title: "Welcome to snack vending",
                value: obj,
                // result: abj,
            });
        })
    }
    
}