app.service('AppService', function($q, $http, SETTINGS){
    var self = {
        'send' : function(data){
            var d = $q.defer();

            var data = {
            'key': SETTINGS.API_KEY, // It comes from app.js
            'message': {
              'from_email': data.email,
              'from_name': data.name,
              'headers': {
                'Reply-To': data.email
              },
              'subject': 'Contact: ' + data.name,
              'text': data.message,
              'to': [
                {
                  'email': '<YOUR-EMAIL-HERE>',
                  'name': '<CONTACT-NAME-HERE>',
                  'type': 'to'
                }]
            }
          };

            $http.post(SETTINGS.URL, data)
                .success(function(res){
                    d.resolve(res);
                })

                .error(function(err){
                    d.reject(err);
                })

            return d.promise;
        }
    };

    return self;
});
