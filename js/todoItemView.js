var TodoItemView = Backbone.View.extend({
  tagName: "li",

  initialize: function (options) {
    if (!(options && options.model)) throw new Error("model is not specified");
    this.model.on("change",this.render, this);
  },

  events: {
    "click #toogle": "onClickToggle",
  },

  onClickToggle: function () {
    this.model.toggle();
    console.log(this.model.toJSON());
  },

  render: function () {
    this.$el.toggleClass("completed", this.model.get("isCompleted"));
    
    var checked = this.model.get("isCompleted") ? "checked" : "";

    this.$el.html(
      `<input id='toogle' type='checkbox' ${checked}></input>` +
        this.model.escape("description")
    );

    return this;
  },
});
