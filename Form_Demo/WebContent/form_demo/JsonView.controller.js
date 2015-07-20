var LB,LB1,LB2,LB3,LB4;
sap.ui.controller("form_demo.JsonView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf form_demo.JsonView
*/
//	onInit: function() {
//
//	},

	
	
	
	
	

	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf form_demo.JsonView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf form_demo.JsonView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf form_demo.JsonView
*/
//	onExit: function() {
	
//
//	}
	
onInit: function() {
	LB = this.getView().byId("idWl");
    LB1 = this.getView().byId("idWl1");
	LB2 = this.getView().byId("idWl2");
	LB3 = this.getView().byId("idWl3");
	LB4 = this.getView().byId("idWl4");
	


	
	
	
	},
	
	
	
	

	
	onPick: function(){
		
		iModel = sap.ui.getCore().getModel("LoginModel");
		value2 = iModel.oData.myArray[0].fname;
		value3 = iModel.oData.myArray[0].lname;
		value4 = iModel.oData.myArray[0].cno;
		value5 = iModel.oData.myArray[0].email;
		LB.setText(" Hello : " + value2 );//+ '<br/>'+ " last name  : "+ value3);//  + "  contact : " + value4 + "  mail id : " + value5);


	LB.setText("First_Name  : " + value2); 
	LB1.setText("Last_Name  : " + value3 );
	LB2.setText("Phone_NO.  : " + value4 );
	LB3.setText("Emai_Id    : " + value5 );
		

		
		
		
		
	}

});