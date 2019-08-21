questApp.controller("QuestionController", ["$scope", "$http", function($scope, $http) {
    // $scope.loaded = false;

    $scope.images = function() {
        const title = 'car';
        $http({
            method: "GET",
            headers: {
                // Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
            },
            params: {
                query: title,
                per_page: 30
            },
            url: `https://api.unsplash.com/search/photos?query=${title}&client_id=5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b`,
        }).then(function(res) {
                var totalFound = res.data.results.length;

                console.log(res);

                var photos = [];

                for (var i = 0; i < totalFound; i++) {
                    var full = res.data.results[i].urls.full;
                    var regular = res.data.results[i].urls.regular;
                    var raw = res.data.results[i].urls.raw;
                    var small = res.data.results[i].urls.small;
                    var thumb = res.data.results[i].urls.thumb;

                    photos.push({
                        full: full,
                        regular: regular,
                        raw: raw,
                        small: small,
                        thumb: thumb
                    });
                }

                $scope.photos = photos;
                $scope.loaded = true;

            },
            function(res) {
                console.log('error', res);
            });
    };

    $scope.images();
}]);
