module.exports = {
    editProducts: (req, res) => {
        var amount;
        var ref = database.ref("nowsnack/s0").on('value',function(snapshot){
            amount = snapshot.val().amount;
        });

        res.render('pages/edit-snack.ejs', {
            title: "Welcome to snack vending"
        });
    }
}