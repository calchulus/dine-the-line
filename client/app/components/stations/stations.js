import angular from 'angular';
import stationsComponent from './stations.component';
import stationFactory from './station.factory';

let stationsModule = angular.module('stations', [])
  .component('stations', stationsComponent)
  .factory('stationFactory', stationFactory)
  .name;

export default stationsModule;