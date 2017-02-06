class IndexController {
    constructor(indexFactory) {
        indexFactory.getPosts().then(data => {
            this.posts = data;
        });
    }
}

export default IndexController;