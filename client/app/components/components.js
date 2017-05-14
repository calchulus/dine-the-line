import angular from 'angular';
import Home from './home/home';
import Stations from './stations/stations';

let componentModule = angular.module('app.components', [
  Home,
  Stations
])

.name;

export default componentModule;
