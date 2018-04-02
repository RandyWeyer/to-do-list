//Back End

function taskItem(name, description) {
  this.name = name;
  this.description = description;
};



//Front End
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var userTaskInput = $("#new-task-input").val();
    var userDescriptionInput = $("#task-description").val();

    var newTask = new taskItem(userTaskInput, userDescriptionInput);

    $("ul#tasks").append("<li id='" + newTask.name + "'><span class='tasks col-md-6'>" + newTask.name + "</span><button class='btn " + newTask.name + "'>Remove</button></li>");

    $("button." + newTask.name).last().click(function() { //VALUABLE
      $(this).parent().remove();
    });

    $(".tasks").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newTask.name);
      $(".task-details").text(newTask.description);
    });

    $("input#new-task-input").val("");
    $("input#task-description").val("");
  });
});
