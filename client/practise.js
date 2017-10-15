

Template.formaaaaa.events({
'click #submit':function(event){
  event.preventdefault();
  var data=$("#txtbtn").val();
  // console.log(data);
  var json={
    key:data,
  }
    console.log(json);
}
});
