import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
Template.contact.onCreated(function helloOnCreated() {
  this.editdata = new ReactiveVar();
  this.updateBtnVar = new ReactiveVar(false);
  this.getIdBVar = new ReactiveVar();

});

Template.contact.helpers({
  data(){
    return CUSTOMERDATA.find({}).fetch();
  },
    'showBtn':function() {
        if (Template.instance().updateBtnVar.get()) {
          return true;
        }else {
          return false;
        }
        return CUSTOMERDATA.find({}).fetch();
      },
      returndata() {
        if(Template.instance().editdata.get())
         return Template.instance().editdata.get();
        else{

          return false;
         }
  }
});
Template.contact.events({
  'click #submitbtn':function(event) {
    event.preventDefault();
var firstname=$("#fname").val();
var lastname=$("#lname").val();
var email=$("#mail").val();
var phone=$("#p_no").val();
var address=$("#add").val();
var cityname=$("#cname").val();
var statename=$("#sname").val();
var zipcode=$("#zcode").val();
var website=$("#wname").val();
var hosting=$("#rbutton:checked").val();
var textarea=$("#txtarea").val();
      var json={
        firstname:firstname,
        lastname:lastname,
        email:email,
        phone:phone,
        address:address,
        cityname:cityname,
        statename:statename,
        zipcode:zipcode,
        website:website,
        hosting:hosting,
        textarea:textarea,
      }
        console.log(json);
CUSTOMERDATA.insert(json);
},
'click #delete':function (event) {
  event.preventDefault();
  CUSTOMERDATA.remove(this._id);
},
'click #edit':function (event) {
    event.preventDefault();
    Template.instance().updateBtnVar.set(true);
      Template.instance().getIdBVar.set(this._id);
var result=CUSTOMERDATA.find({_id:this._id}).fetch();
Template.instance().editdata.set(result[0]);
},
'click #updatebtn':function(event) {
      event.preventDefault();
    var xyz= Template.instance().getIdBVar.get();
    console.log(xyz);
     var firstname=$("#fname").val();
    var lastname=$("#lname").val();
    var email=$("#mail").val();
    var phone=$("#p_no").val();
    var address=$("#add").val();
    var cityname=$("#cname").val();
    var statename=$("#sname").val();
    var zipcode=$("#zcode").val();
    var website=$("#wname").val();
    var hosting=$("#rbutton:checked").val();
    var textarea=$("#txtarea").val();

       CUSTOMERDATA.update({_id:xyz}, {
      $set: {
        firstname:firstname,
        lastname:lastname,
        email:email,
        phone:phone,
        address:address,
        cityname:cityname,
        statename:statename,
        zipcode:zipcode,
        website:website,
        hosting:hosting,
        textarea:textarea,
      }
  });
},
});
