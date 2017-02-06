let IndexFactory = function ($http, $q) {
    let getPosts = () => {
        let deferred = $q.defer();

        $http
            .get('https://frontcamp-khvainitski.herokuapp.com/api/posts')
            .then((response) => {
                deferred.resolve(response.data);
            })
            .catch(() => {
                deferred.reject('Warning! Error occurred while getting new posts');
            });

        console.log(deferred.promise);

        return deferred.promise;
    };

    return { getPosts }
};

export default IndexFactory;