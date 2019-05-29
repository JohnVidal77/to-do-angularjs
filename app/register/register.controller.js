(function(){
     'use strict';
     
     angular
         .module('app.register')
         .controller('RegisterController', RegisterController);
         
     RegisterController.$inject = [];
     
     /* @ngInject */
     
     function RegisterController(){
         const vm = this;

         vm.logoUrl = "assets/logo/logo-orange.svg";
     }
 })();