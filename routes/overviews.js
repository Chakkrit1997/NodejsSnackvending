module.exports = {
    Overviews: (req, res) => {
        var amount;
        var ref = database.ref("nowsnack/s0").on('value',function(snapshot){
            amount = snapshot.val().amount;
        });

        res.render('pages/overviews.ejs', {
            title: "Welcome to snack vending"
        });
    }
}