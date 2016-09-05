var baseTag = document.createElement('base');
baseTag.href = document.location.href.replace(/\#.*/,'').replace(/\.*/,'');
document.head.appendChild(baseTag);
var ZYDECHAT = angular.module("ZYDECHAT", ['ui.router']);