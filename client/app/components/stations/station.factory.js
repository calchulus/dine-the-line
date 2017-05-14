let StationFactory = function($http) {

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

StationFactory.$inject = ['$http'];

export default StationFactory;