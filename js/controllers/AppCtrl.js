app.controller('AppCtrl', function( $scope, AppService ){
    $scope.emailForm = {};
    $scope.success = false;

    $scope.sendEmail = function(valid, emailForm){
        var l = Ladda.create(document.querySelector( '.ladda-button' ));

        if (valid) {
            l.start();
            AppService.send(emailForm).then(
                function success(res){
                    $scope.success = true;
                    l.stop();
                    console.log('Success');
                    console.log(res);
                },

                function error(err){
                    l.stop();
                    console.log('Error');
                    console.log(err);
                }
            );
        };
    }
});