sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../utils/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter) {
        "use strict";

        return Controller.extend("ux.dashboardv1.0.controller.Main", {

            formatter:formatter,
            onInit: function () {

            },

            onQuarterChange:function(){
              //  this.onDateSelection();
              if (oValue === "Q1") {

				var CurrentDate = new Date(); // YYYY- MM - DD 2023-04-04
				var oCurrentYear = CurrentDate.getFullYear;

				var oQ1Date = new Date(oCurrentYear, 3, 31);

				return oQ1Date;

			} else if (oValue === "Q2") {
				var CurrentDate = new Date(); // YYYY- MM - DD 2023-04-04
				var oCurrentYear = CurrentDate.getFullYear;
				var oQ2Date = new Date(oCurrentYear, 6, 30); // Q2 - 2023-06-30

				return oQ2Date;

			}
			else {

				var CurrentDate = new Date();

				return CurrentDate;
			}
            },

            
        });
    });
