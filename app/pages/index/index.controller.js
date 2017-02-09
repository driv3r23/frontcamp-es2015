class IndexController {
    constructor(postFactory) {
        postFactory.getPosts().then(data => {
            this.posts = data;
        });
    }
}

export default IndexController;