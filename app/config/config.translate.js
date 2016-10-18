app.config(['$translateProvider', function ($translateProvider) {
    if (window.navigator.language !== "pt-BR" && window.navigator.language !== "en") {
        $translateProvider.preferredLanguage("en");
    } else {
        $translateProvider.preferredLanguage(window.navigator.language);
    }
}]);