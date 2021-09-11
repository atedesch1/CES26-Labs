var selectedElement = null;
var selectionMode = true;

// select element
$("body *").on({
  click: function (e) {
    if (selectionMode) {
      $(selectedElement).removeClass("focus");
      if (e.target === e.currentTarget) {
        selectedElement = this;
      }
      $(selectedElement).addClass("focus");
      $(".task-display").text($(selectedElement).html());
    }
  },
});

function toggleSelect() {
  selectionMode = !selectionMode;
}

function removeElement() {
  $(selectedElement).remove();
}

function changeElement() {
  let formArray = $("#changeElementForm").serializeArray();
  var text = formArray[0]["value"];
  if (text !== "") {
    $(selectedElement).text(text);
  }
  var html = formArray[1]["value"];
  if (html !== "") {
    $(selectedElement).html(html);
  }
  var name = formArray[2]["value"];
  var value = formArray[3]["value"];
  if (name !== "" && value !== "") {
    $(selectedElement).attr(name, value);
  }
}

function addElement() {
  let formArray = $("#addElementForm").serializeArray();
  var html = formArray[0]["value"];
  if (html != "") {
    var newElement = $("<div><div/>");
    newElement.html(html);
    $(selectedElement).append(newElement);
  }
}
