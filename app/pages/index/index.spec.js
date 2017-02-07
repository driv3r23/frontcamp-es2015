import IndexModule from './index'

describe('Index', () => {
    let $rootScope, $state, $location, $componentController, $compile, $httpBackend, $componentFactory;

    beforeEach(window.module(IndexModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
        $httpBackend = $injector.get('$httpBackend');
        $componentFactory = $injector.get('indexFactory');
    }));

    describe('Module', () => {
        it('default component is index', () => {
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

        it('has a count property', () => {
            expect(controller).to.have.property('count');
        });

        it('has response above 0', function (done) {
            $httpBackend.when('GET', 'https://frontcamp-khvainitski.herokuapp.com/api/posts').respond(200, [{
                "_id": "58663d96ca16de1c388f5138", "__v": 0,
                "image": "uploads/start-your-blog-4-steps.png",
                "body": "Example body",
                "author": "Example author",
                "title": "Example title",
                "date": "2016-12-30T10:57:26.275Z"
            }]);

            $componentFactory.getPosts().then(function (res) {
                expect(res).to.have.length.of.at.least(1);
                done();
            });

            $httpBackend.flush();
        });
    });

    /*
     describe('View', () => {
     let scope, template;

     beforeEach(() => {
     scope = $rootScope.$new();
     template = $compile('<index-component></index-component>')(scope);
     scope.$apply();
     });

     it('has counter in template', () => {
     expect(template.find('p').html()).to.eq('Posts found:');
     });
     });
     */
});
