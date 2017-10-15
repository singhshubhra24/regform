// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
// Template.onlineform.onCreated(function helloOnCreated() {
//   this.editdata = new ReactiveVar();
//   this.updateBtnVar = new ReactiveVar(false);
//   this.getIdBVar = new ReactiveVar();
// });
//  Template.onlineform.helpers({
//   'data':function() {
//     return registerdata.find({}).fetch();
//   },
//   'showBtn':function() {
//     if (Template.instance().updateBtnVar.get()) {
//       return true;
//     }else {
//       return false;
//     }
//     return registerdata.find({}).fetch();
//   },
//   returndata() {
//     // if(Template.instance().editdata.get())
//      return Template.instance().editdata.get();
//     // else{
//       // console.log("cvgxc");
//       // return false;
//     // }
// 
//     }
// });
// Template.onlineform.events({
//    'click #submit':function(event) {
//      event.preventDefault();
//
//  var name= $("#username").val();
//  var age=$("#userage").val();
//  var  gender=$("#usergender:checked").val();
//  var mobile=$("#usermobile").val();
//  var email=$("#useremail").val();
//  var country=$("#usercountry").val();
//  var json = {
//    name:name,
//       age:age,
//       gender:gender,
//     mobile:mobile,
//     email:email,
//    country:country
//  };
//   console.log(json);
//  registerdata.insert(json);
// },
//
// 'click #delete':function(event) {
//   event.preventDefault();
//   registerdata.remove(this._id);
// },
//
// 'click #edit':function(event) {
//   Template.instance().updateBtnVar.set(true);
//   Template.instance().getIdBVar.set(this._id);
// var result =registerdata.find({_id:this._id}).fetch();
//  Template.instance().editdata.set(result[0]);
//    },
//
//
//    'click #btnUpdate':function(event) {
//       event.preventDefault();
//     var xyz= Template.instance().getIdBVar.get();
//     console.log(xyz);
//     var name= $("#username").val();
//     var age=$("#userage").val();
//     var  gender=$("#usergender:checked").val();
//     var mobile=$("#usermobile").val();
//     var email=$("#useremail").val();
//     var country=$("#usercountry").val();
//     console.log(xyz);
//     console.log(name);
//     console.log(gender);
//     console.log(mobile);
//     console.log(email);
//     console.log(country);
//        registerdata.update({_id:xyz}, {
//       $set: {
//         name:name,
//         age:age,
//         gender:gender,
//         mobile:mobile,
//         email:email,
//         country:country,
//       },
//     });
