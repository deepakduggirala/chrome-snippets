function ngScope(e) {
    if (e) {
        return angular.element().scope();
    }
    return angular.element($0).scope();
}

function ngService(serviceName) {
    return angular.element(document.querySelector('*[ng-app]')).injector().get(serviceName);
}

function getWatchers(root) {
    root = angular.element(root || document.documentElement);
    var watcherCount = 0;

    function getElemWatchers(element) {
        var isolateWatchers = getWatchersFromScope(element.data().$isolateScope);
        var scopeWatchers = getWatchersFromScope(element.data().$scope);
        var watchers = scopeWatchers.concat(isolateWatchers);
        angular.forEach(element.children(), function(childElement) {
            watchers = watchers.concat(getElemWatchers(angular.element(childElement)));
        });
        return watchers;
    }

    function getWatchersFromScope(scope) {
        if (scope) {
            return scope.$$watchers || [];
        } else {
            return [];
        }
    }
    return getElemWatchers(root);
}

function getWatchersStr() {
    return getWatchers($0).filter(x => typeof x.exp === 'string').map(x => x.exp);
}