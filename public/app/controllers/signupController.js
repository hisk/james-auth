(function() {
    'use strict';

    angular
        .module('jamesAuth')
        .controller('SignupController', [
            '$scope',
            'authService', 
            signupController
        ]);

    function signupController($scope, authService) {
        var vm = this;

        vm.signupSuccess = false;
        vm.signupError = false
        vm.signupErrorMessage = null;

        vm.signup = signup;

        function signup() {
            vm.signupSuccess = false;
            vm.signupError = false
            vm.signupErrorMessage = null;

            if(!vm.username || !vm.password) {
                vm.signupError = true;
                vm.signupErrorMessage = 'Username and password required!';
                return;
            }

            authService.signup(vm.username, vm.password)
                .then(handleSuccessfulSignup)
                .catch(handleFailedSignup);
        }

        function handleSuccessfulSignup(response) {
            vm.signupSuccess = true;
        }

        function handleFailedSignup(response) {
            vm.signupSuccess = false;

            if(response && response.data) {
                vm.signupErrorMessage = response.data.message;
                vm.signupError = true;
            }
        }
    }

})();