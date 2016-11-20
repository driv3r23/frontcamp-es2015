"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require("babel-polyfill");

(function () {
    var NewsApi = function () {
        function NewsApi(sourceApi, keyApi, containerApi) {
            _classCallCheck(this, NewsApi);

            this.sourceApi = sourceApi;
            this.keyApi = keyApi;
            this.containerApi = containerApi;
        }

        _createClass(NewsApi, [{
            key: "createApiRequest",
            value: function createApiRequest(source, key) {
                return new Request("https://newsapi.org/v1/articles?source=" + source + "&apiKey=" + key);
            }
        }, {
            key: "getNewsList",
            value: function getNewsList() {
                var _this = this;

                fetch(this.createApiRequest(this.sourceApi, this.keyApi)).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    _this.parseNewsList(response, _this.containerApi);
                }).catch(function (error) {
                    console.error(error);
                });
            }
        }, {
            key: "parseNewsList",
            value: function parseNewsList(response, container) {
                var list = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

                response["articles"].forEach(function (item) {
                    list += "<article>\n                        <h2>" + item.title + "</h2>\n                        <div>\n                            <img src=\"" + item.urlToImage + "\">\n                            <p>" + item.description + "<br><a href=\"" + item.url + "\">read more</a></p>\n                        </div>\n                    </article>";
                });

                document.querySelector(container).innerHTML = list;
            }
        }]);

        return NewsApi;
    }();

    var newsApi = new NewsApi("bbc-news", "2a1d89a4b5bf4e9d93d289b1f88ff16c", "main");
    newsApi.getNewsList();
})();
