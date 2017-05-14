import angular from 'angular';
import stationsComponent from './stations.component';
import stationsFactory from './stations.factory';

let stationsModule = angular.module('stations', [])
  .component('stations', stationsComponent)
  .factory('stationsFactory', stationsFactory)
  .name;

export default stationsModule;