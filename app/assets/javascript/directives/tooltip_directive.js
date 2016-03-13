angular.module('app').directive('toggle', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            var setTitle = attrs.title;
            attrs.$set('title', setTitle);
            $(element)
                .attr('title',scope.$eval(attrs.tooltip))
                .tooltip({placement: "right"});
        }
    };
});


//angular.module('app').directive('tooltip', function () {
//    return {
//        restrict:'A',
//        link: function(scope, element, attrs)
//        {
//            console.log(scope.record);
//            console.log(attrs.tooltip);
//            var template = '<div id="section">'+
//                '<h2>ADIL</h2>'+
//                '<p>123</p>'+
//                '<p>ttttt</p>'+
//                '</div>';
//            $(element)
//                .attr('title',template)
//                .tooltip({placement: "top"});
//        }
//    }
//});


angular.module('app').directive('tooltip', function ($document, $compile) {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attrs) {

            var tip = $compile('<div ng-class="tipClass">{{ text }}<div class="tooltip-arrow"></div></div>')(scope),
                tipClassName = 'tooltip',
                tipActiveClassName = 'tooltip-show';

            scope.tipClass = [tipClassName];
            scope.text = attrs.tooltip;

            if(attrs.tooltipPosition) {
                scope.tipClass.push('tooltip-' + attrs.tooltipPosition);
            }
            else {
                scope.tipClass.push('tooltip-down');
            }
            $document.find('body').append(tip);

            element.bind('mouseover', function (e) {
                tip.addClass(tipActiveClassName);

                var pos = e.target.getBoundingClientRect(),
                    offset = tip.offset(),
                    tipHeight = tip.outerHeight(),
                    tipWidth = tip.outerWidth(),
                    elWidth = pos.width || pos.right - pos.left,
                    elHeight = pos.height || pos.bottom - pos.top,
                    tipOffset = 10;

                if(tip.hasClass('tooltip-right')) {
                    offset.top = pos.top - (tipHeight / 2) + (elHeight / 2);
                    offset.left = pos.right + tipOffset;
                }
                else if(tip.hasClass('tooltip-left')) {
                    offset.top = pos.top - (tipHeight / 2) + (elHeight / 2);
                    offset.left = pos.left - tipWidth - tipOffset;
                }
                else if(tip.hasClass('tooltip-down')) {
                    offset.top = pos.top + elHeight + tipOffset;
                    offset.left = pos.left - (tipWidth / 2) + (elWidth / 2);
                }
                else {
                    offset.top = pos.top - tipHeight - tipOffset;
                    offset.left = pos.left - (tipWidth / 2) + (elWidth / 2);
                }

                tip.offset(offset);
            });

            element.bind('mouseout', function () {
                tip.removeClass(tipActiveClassName);
            });

            tip.bind('mouseover', function () {
                tip.addClass(tipActiveClassName);
            });

            tip.bind('mouseout', function () {
                tip.removeClass(tipActiveClassName);
            });


        }
    }
});
