class postController {
    constructor($stateParams, postFactory) {
        this.postKey = $stateParams.postKey;

        if (this.postKey) {
            postFactory.getPosts(this.postKey).then(data => {
                this.data = data;
            });
        }
    }
}

export default postController;