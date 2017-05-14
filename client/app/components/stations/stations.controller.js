
class StationsController {

  constructor($scope, stationFactory) {

    'ngInject';

    this.name = 'stations';
    this.$scope = $scope;

    this.stations = [];

    this.reset = function() {
      $scope.selectedStation = null;
      $scope.businesses = null;
    };

    this.$onInit = function () {
      stationFactory
        .getStations()
        .then(result => this.stations = result);
    }

  }

}

StationsController.$inject = ['$scope','stationFactory'];

export default StationsController;