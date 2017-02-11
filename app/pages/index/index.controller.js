class IndexController {
    constructor(postFactory) {
        this.count = 0;

        postFactory.getPosts().then(data => {
            this.posts = data;
            this.count = data.length;
        });
    }
}

export default IndexController;