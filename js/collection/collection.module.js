define(['./collection.js', './member.js'], function(collection, member) {
    angular.module('collection',[])
    .directive('collection', collection)
    .directive('member', member);
});

