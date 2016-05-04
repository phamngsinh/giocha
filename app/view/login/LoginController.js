Ext.define('TutorialApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginClick: function () {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true

        var loginForm = Ext.getCmp('loginForm').getValues();
        var e = this;
        Ext.Ajax.request({
            url: 'http://localhost/giochaAPI/public/api/authenticate',
//            url: 'http://192.168.2.69/ypc571/public/v1/auth/login',
            method: 'POST',
            params: {
                email: loginForm.username,
                password: loginForm.password
            },
            success: function (response, opts) {
                var rs = Ext.decode(response.responseText);
                if (rs.success) {
                    localStorage.setItem("TutorialLoggedIn", true);
                    localStorage.setItem('Bearer', rs.data.token);
                    localStorage.setItem('currentUser', rs.data.user.id);
                    e.getView().destroy();
                    Ext.create({
                        xtype: 'app-main'
                    });
                } else {
                    alert(rs.message);
                }
            },
            failure: function (response, opts) {
                alert('Could not communicate with the REST server.');
            },
            headers: {
                'Accept': 'application/json'
            },
        });
    }
});