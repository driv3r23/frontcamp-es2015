import AddModule from './add'

describe('Add', () => {
    let $rootScope, $state, $location;

    beforeEach(window.module(AddModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
    }));

    describe('Module', () => {
        it('Add component should be visible when navigates to /posts/add', () => {
            $location.url('/posts/add');
            $rootScope.$digest();
            expect($state.current.component).to.eq('addComponent');
        });
    });

    describe('Controller', () => {});

    describe('View', () => {});
});
