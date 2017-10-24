(function() {
    'use strict';

    angular
        .module('commentsApp', [])
        .controller('CommentsController', CommentsController);

    // Inject $scope dependency.
    CommentsController.$inject = ['$scope'];

    // Declare CommentsController.
    function CommentsController($scope) {
        var vm = this;

        // Current comment.
        vm.comment = {};

        // Array where comments will be.
        vm.comments = [];

        // Fires when form is submited.
        vm.addComment = function($rootScope) {
            // Fixed img.
            vm.comment.avatarSrc = 'http://lorempixel.com/200/200/people/';

            // Add current date to the comment.
            vm.comment.date = Date.now();

            vm.comments.push(vm.comment);
            console.log(vm.comments);
            localStorage.setItem("Comment", Object.values(vm.comment));
            vm.comment = {};

            // Reset clases of the form after submit.
            $scope.form.$setPristine();

        }
        vm.check = function($window, $rootScope) {
            $rootScope.online = navigator.onLine;
            $window.addEventListener("offline", function() {
                $rootScope.$apply(function() {
                    $rootScope.online = false;
                });
            }, false);
            $window.addEventListener("online", function() {
                $rootScope.$apply(function() {
                    $rootScope.online = true;
                });
            }, false);

            if ($rootScope.online = true) {
                return mydata;
            }

            if ($rootScope.online = false) {
                var KEY = 'SelectedValue';
                var mydata = $window.localStorage.getItem(KEY);
                if (mydata) {
                    mydata = JSON.parse(mydata);
                } else {
                    mydata = [];
                }
                $window.localStorage.setItem(KEY, JSON.stringify(mydata));
                var mydata = $window.localStorage.getItem(KEY);
                if (mydata) {
                    mydata = JSON.parse(mydata);
                }
                return mydata;
            }
        }

        // Fires when the comment change the anonymous state.
        vm.anonymousChanged = function() {
            if (vm.comment.anonymous)
                vm.comment.author = "";
        }
    }


})();