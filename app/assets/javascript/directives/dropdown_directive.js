angular.module('app').directive('customdropdownlist', function(){

    return {
        restrict: 'E',
        //templateUrl: "app/templates/dd_template.html",
        template: '<div class="dropdown dropdown-scroll" >'+
        '<button class="btn btn-default dropdown-toggle" type="button" style="width:300px;" id="dropdownMenu1" data-toggle="dropdown">Select driver/ pair vehicle<span class="caret caret-custom"></span>'+
            '</button>'+
            '<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">'+
            '<li role="presentation">'+
            '<div class="input-group input-group-sm search-control">'+
            '<input type="text" class="form-control dd-search-box" ng-click="stopPrpgtion($event)" ng-model="query"></input>'+
            '<span class="input-group-addon">'+
            '<span class="glyphicon glyphicon-search"></span>'+
            '</span>'+
            '</div>'+
            '</li>'+
            '<li role="presentation" ng-repeat="record in records | filter:query">'+
            '<a href="#" data-toggle="tooltip" data-placement="top" title="{{record.driver[0].name}} {{record.driver[1].mobile}} {{record.vehicle[0].number}} {{record.vehicle[1].model}}" data-html="true" ng-click="updateTopDropDown(record);"> {{record.driver[0].name ? record.driver[0].name : "-"}} / {{record.vehicle[0].number ? record.vehicle[0].number : "-"}}</a>'+
            '</li>'+
            '</ul>'+
            '</div>',
        link: function(scope, element, attribute){

        }
    }
});


angular.module('app').directive('dropdownvalueselected', function(){

    return {
        restrict: 'E',
        template: '<div class="dropdown dropdown-scroll"  >'+
        '<button class="btn btn-default dropdown-toggle {{upperddclass}}" style="width:300px;" type="button" id="dropdownMenu1" data-toggle="dropdown">{{ddValue}}<span class="caret caret-custom"></span>'+
        '</button>'+
        '</div>',
        link: function(scope, element, attribute){

        }
    }
});



