module.exports = {

    login: (req, res) => {

        var snackobj = database.ref().once('value').then(function (dataSnapshot) {

            obj = dataSnapshot.val();

            res.render('pages/login.ejs', {

                title: "SVM",
                value: obj,
                
            });
        })
    }
    
}