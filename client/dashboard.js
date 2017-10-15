import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
Template.customerinfo.onCreated(function helloOnCreated() {
 this.getCustomername = new ReactiveVar();
 this.applyGST = new ReactiveVar();
 // this.getCustomeremail = new ReactiveVar();
 // this.getCustomermobile = new ReactiveVar();
 });

 Template.customerinfo.helpers({
   one(){
     return CUSTOMERDATA.find().fetch();
   },
   info(){
     return DASHBOARD.find({}).fetch();
   },
   sdfsdf(){
     if (Template.instance().getCustomername.get()) {
       return Template.instance().getCustomername.get();
     }else {
       return false;
     }
   },
   returnddd(){
     if (Template.instance().applyGST.get()) {
       return Template.instance().applyGST.get();
     }else {
       return false;
     }
   },
 });

Template.customerinfo.events({
  "change #ddlname": function (e, instance) {
    var customernameIdVar = $(e.currentTarget).val();
    // console.log(customernameIdVar);
    var getData = CUSTOMERDATA.find({firstname:customernameIdVar}).fetch();
    // console.log(getData);
    instance.getCustomername.set(getData[0]);
  },
  "keyup #textBill": function(e, instance) {
    var billAmt = $(e.currentTarget).val();
    var gst = (billAmt * 14)/100;
    // console.log(gst);
    var totalAmt = Number(billAmt) + Number(gst);
    // console.log(totalAmt);
    var json = {
      gst:gst,
      amount:totalAmt
    };
    instance.applyGST.set(json);
  },
  'click #savebtn':function(event) {
    event.preventDefault();
  var textBill=$("#textBill").val();
  var gst=$("#gst").val();
  var total=$("#total").val();
   var name=$("#ddlname").val();
      var email=$("#email").val();
         var mobile=$("#mobile").val();
    //  console.log(name);
var jsondata={
       name:name,
       email:email,
       phone:mobile,
       textBill:textBill,
       gst:gst,
       total:total,
}
  console.log(jsondata);
    DASHBOARD.insert(jsondata);
},
 });
