function ngScope(e){
    if(e){
        return angular.element().scope();
    }
    return angular.element($0).scope();
}

function ngService(serviceName){
    return angular.element(document.querySelector('*[ng-app]')).injector().get(serviceName);
}