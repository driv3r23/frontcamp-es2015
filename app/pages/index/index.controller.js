class IndexController {
    constructor(indexService) {
        this.post = indexService.getPosts();

        console.log('asd');
    }
}

export default IndexController;