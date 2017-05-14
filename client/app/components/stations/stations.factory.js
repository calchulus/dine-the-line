let StationsFactory = function($http) {

  return {
    getStations: getStations
  };

  function getStations() {
    return $http.get('../../lib/cta_stations.json')
      .then(getAllComplete)
      .catch(getAllFailed);
  }

  function getAllComplete(response) {
    return response.data;
  }

  function getAllFailed(error) {
    return error.data;
  }
};

StationsFactory.$inject = ['$http'];

export default StationsFactory;