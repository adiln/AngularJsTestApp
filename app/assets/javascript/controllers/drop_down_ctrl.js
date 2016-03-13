angular.module('app').controller('DropDownCtrl', function($scope, $http) {

    //Cross origin requests are only supported for protocol schemes: http, data
    //$http({
    //    method: 'GET',
    //    url: 'app/data/data.json'
    //}).success(function (data, status, headers, config) {
    //    console.log(data);
    //        $scope.record = data;
    //})
    //.error(function (data, status, headers, config) {
    //        //error
    //});
    $scope.ddValue = "";

    $scope.records = [
            {'driver':[{'name': 'Amit'}, {'mobile': '+91467644668'}],
            'vehicle': [{'number': "XT6776"}, {'model': 'H'}]
            },
            {'driver':[{'name': 'Aman'}, {'mobile': '+91467699668'}],
            'vehicle':[{'number': "XT8886"}, {'model': 'M'}]
            },
            {'driver':[{'name': 'Alberto'}, {'mobile': '+9144444444'}]
             },
            {'driver':[{'name': 'Joy'}, {'mobile': '+91799999999'}],
            'vehicle':[{'number': 'XT6996'}, {'model': 'U'}]
            },
            {'driver':[{'name': 'Safdar'}, {'mobile': '+91878777878'}],
              'vehicle':[{'number': 'XT9999'}, {'model': 'L'}]
            },
            {
            'vehicle':[{'number': 'XT6996'}, {'model': 'U'}]
            },
            {'driver':[{'name': 'Sharaf'}, {'mobile': '+91555555555'}],
           'vehicle':[{'number': 'UX6776'}, {'model': 'P'}]
            }
    ];

    $scope.stopPrpgtion = function($event){
        $event.stopPropagation();
    };

    $scope.updateTopDropDown = function(record){
        $scope.ddValue = (record.driver && record.driver[0].name ? record.driver[0].name : "-")  + ' / ' + (record.vehicle && record.vehicle[0].number ? record.vehicle[0].number : "-");
        $scope.upperddclass = "dd-btn";

    };
});
