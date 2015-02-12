window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var $rootEl = $('#content');
  	var feeds = new NewsReader.Collections.Feeds();
  	feeds.fetch();

    new NewsReader.Routers.FeedRouter(feeds, $rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
