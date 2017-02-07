class IndexController {
    constructor(indexFactory) {
        this.count = 0;

        indexFactory.getPosts().then(data => {
            this.posts = data;
            this.count = data.length;
        });
    }
}

export default IndexController;