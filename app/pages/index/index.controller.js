class IndexController {
    constructor(indexFactory) {
        this.post = indexFactory.getPosts().then(data => {
            console.log('Boom!', data);
        });
    }
}

export default IndexController;