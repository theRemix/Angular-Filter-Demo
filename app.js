angular
  .module('SortTest', [])
  .controller('testController', ['$scope', function($scope){
    $scope.cereals = [
      {
        name: "Froot Loops",
        description: "Fruity colorful discs of wonder"
      },
      {
        name: "Froot Flakes",
        description: "Fruity colorful flakes of wonder"
      },
      {
        name: "Frosted Flakes",
        description: "Sugar coated pieces of cardboard"
      },
      {
        name: "Frosty Loops",
        description: "Sugar coated mini donuts"
      },
      {
        name: "Cheerios",
        description: "Flavorless mini donuts"
      },
      {
        name: "Corn Pops",
        description: "Corny poops"
      },
      {
        name: "Corn Discs",
        description: "The original CD"
      },
      {
        name: "Mini Wheats",
        description: "Small Wheats"
      },
      {
        name: "Wheat Grain",
        description: "Bigger Wheats"
      },
    ];
  }]);