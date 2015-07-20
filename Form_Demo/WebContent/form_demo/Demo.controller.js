sap.ui.controller("form_demo.Demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf form_demo.Demo
*/
//	onInit: function() {
//
//	},

	
	
	
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf form_demo.Demo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf form_demo.Demo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf form_demo.Demo
*/
//	onExit: function() {
//
//	}
	
	
	
	
	
	onPress: function(){
		
		
		var firstName = this.getView().byId("fname").getValue();
		var lastName = this.getView().byId("lname").getValue();
		var phone_number = this.getView().byId("phno").getValue();
		var email = this.getView().byId("eid").getValue();
	
		var fname = /^[A-Za-z_]{3,20}$/;
		var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var pno = /^[0-9]{10}$/;
		
		function openAlert() {
			  // say "Hello World" with one short line of code
				sap.ui.commons.MessageBox.alert("Hello World from MessageBox.alert()!");
			}
		if(firstName == "" || firstName == null)
		                    {
			new sap.ui.commons.Button({text:"Show Alert!", press : openAlert});
		                     this.getView().byId("fname").setValueState("Error");
		                     this.getView().byId("fname").setValueStateText("Please Enter Firstname");
		                    errorMessage = errorMessage +"\n * Enter First Name";
		                    flag = false;
		                    }
		                  else
		                     this.getView().byId("fname").setValueState("None");
		
		if( !firstName.match(fname) ){
		     alert("Invalid First Name");
		}
		
	
		
		if(phone_number == "" || phone_number == null)
        {
         this.getView().byId("phno").setValueState("Error");
         this.getView().byId("phno").setValueStateText("Please Enter Phone Number");
        errorMessage = errorMessage +"\n * Enter Phone Number";
        flag = false;
        }
      else
         this.getView().byId("phno").setValueState("None");
		if( !phone_number.match(pno) ){
		     alert("Invalid Phone Number");
		}
		
		
		
		
		if(email == "" || email == null)
        {
         this.getView().byId("eid").setValueState("Error");
         this.getView().byId("eid").setValueStateText("Please Enter Email");
        errorMessage = errorMessage +"\n * Enter E-Mail";
        flag = false;
        }
      else
         this.getView().byId("eid").setValueState("None");
		
		if( !email.match(ck_email) ){
		     alert("Invalid Email");
		}
		else{
			
			var myData={
					myArray:[{
						
						
						fname: firstName,
						lname: lastName,
						cno:phone_number ,
						email: email
						
					}]
						};	

			
		//	alert("Json Atrray data Is :"+ '<br>'+"first name : " + myData.myArray[0].fname +"last name : " + myData.myArray[0].lname + "contact at:"+ myData.myArray[0].cno +"email id :"+ myData.myArray[0].email );
		   
			 var oModel = new sap.ui.model.json.JSONModel(myData);//create JSON model instance
			   sap.ui.getCore().setModel(oModel,"LoginModel");//set the data for the model
			   sap.ui.controller("form_demo.JsonView").onPick();
			
			 app.to("idView1");
			
		}
	}
   





});