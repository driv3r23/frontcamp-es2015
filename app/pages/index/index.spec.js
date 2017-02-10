import IndexModule from './index'

describe('Index', () => {
    let $rootScope, $state, $location, $componentController, $httpBackend, $componentFactory;

    beforeEach(window.module(IndexModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $httpBackend = $injector.get('$httpBackend');
        $componentFactory = $injector.get('postFactory');
    }));

    describe('Module', () => {
        it('Default component is index', () => {
            $location.url('/');
            $rootScope.$digest();
            expect($state.current.component).to.eq('indexComponent');
        });
    });

    describe('Controller', () => {
        let controller;
        beforeEach(() => {
            controller = $componentController('indexComponent', {
                $scope: $rootScope.$new()
            });
        });

        it('Has a count property', () => {
            expect(controller).to.have.property('count');
        });

        it('Has getPosts factory method', () => {
            expect($componentFactory).to.have.property('getPosts');
        });

        it('Has response of array', function (done) {
            $httpBackend.when('GET', 'https://frontcamp-khvainitski.herokuapp.com/api/posts/').respond(200, [{
                "_id": "58663d96ca16de1c388f5138", "__v": 0,
                "image": "uploads/start-your-blog-4-steps.png",
                "body": "Example body",
                "author": "Example author",
                "title": "Example title",
                "date": "2016-12-30T10:57:26.275Z"
            }]);

            $componentFactory.getPosts().then(function (res) {
                expect(res).to.be.instanceof(Array);
                done();
            });

            $httpBackend.flush();
        });
    });

     describe('View', () => {});
});
