import PostModule from './post'

describe('Post', () => {
    let $rootScope, $componentController, $compile;

    beforeEach(() => {
        window.module(PostModule);
        window.module("ui.router");
    });

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $compile = $injector.get('$compile');
    }));

    describe('Module', () => {});

    describe('Controller', () => {
        let controller;

        beforeEach(() => {
            controller = $componentController('post', {
                $scope: $rootScope.$new()
            });
        });

        it('Has a postKey property', () => {
           expect(controller).to.have.property('postKey');
        });
    });

    describe('View', () => {
        let scope, template;

        beforeEach(() => {
            scope = $rootScope.$new();
            template = $compile('<post></post>')(scope);
            scope.$apply();
        });

        it('Title and Body fields is required', () => {
            expect(angular.element(template[0].querySelector('[name=title]')).attr('required')).to.eq('required');
            expect(angular.element(template[0].querySelector('[name=body]')).attr('required')).to.eq('required');
        });
    });
});
