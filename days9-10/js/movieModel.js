
var MovieModel = Backbone.Model.extend({
    
    defaults: function(){
        return{
            title: "No title",
            year : "empty",
            synopsis: "empty"
        }
    },
    
    initialize: function(){
        if (!this.get("title")) {
            this.set({"title": this.defaults.title});
        }
        if (!this.get("year")) {
            this.set({"year": this.defaults.year});
        }
        if (!this.get("synopsis")) {
            this.set({"synopsis": this.defaults.synopsis});
        }
    },
    
    clear: function() {
      this.destroy();
      this.view.remove();
    }
});

