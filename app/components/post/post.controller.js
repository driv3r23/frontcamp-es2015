class postController {
    constructor($stateParams, postFactory) {
        if ($stateParams.postKey) {
            postFactory.getPosts($stateParams.postKey).then(data => {
                this.data = data;
            });
        }
    }
}

export default postController;