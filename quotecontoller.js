'use strict';

/**
 * @ngdoc function
 * @name showCaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showCaseApp
 */
angular.module('elegantBytesApp')
  .controller('QuoteController', ['$scope', 'quoteFactory', function ($scope, quoteFactory) {
    
      $scope.status = ""; 
      $scope.sendQuote = function() {
          
              quoteFactory.getQuotes().save($scope.quote, function(response){
              $scope.status = response.$resolved; 
              return response; 
                    
          },
          function(error){
              return error;
              
          }); 
          
          $scope.quote = {name:"", email:"", company:"", phone:"", comments:"", webdev:false, prog:false, mobile:false};
          $scope.quoteForm1.$setPristine();              
          $scope.quoteForm2.$setPristine();                
                         
                         
          
          
      }; 
      
      
  }]);
