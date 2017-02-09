let PostFactory = function ($http, $q) {
    let getPosts = (id = '') => {
        let deferred = $q.defer();

        $http
            .get('https://frontcamp-khvainitski.herokuapp.com/api/posts/' + id)
            .then((response) => {
                deferred.resolve(response.data);
            })
            .catch(() => {
                deferred.reject('Warning! Error occurred while getting new posts');
            });

        return deferred.promise;
    };

    return { getPosts }
};

export default PostFactory;