
class StationsController {

  constructor($scope, stationsFactory) {

    'ngInject';

    this.name = 'stations';
    this.$scope = $scope;

    this.stations = [];
    this.selectedStation = null;

    this.reset = function() {
      $scope.selectedStation = null;
      $scope.businesses = null;
    };

    this.$onInit = function () {
      stationsFactory
        .getStations()
        .then(result => this.stations = result);
    }

  }

}

StationsController.$inject = ['$scope','stationsFactory'];

export default StationsController;