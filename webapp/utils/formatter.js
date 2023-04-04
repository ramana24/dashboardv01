sap.ui.define(["sap/ui/model/type/DateTime"], function (TypeDateTime) {
	"use strict";
	return {

		// for Quarter date selection
		onDateSelection: function (oValue) {
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

		onUpdateDate: function (oValue) {
			var oType = new TypeDateTime();
			oType = new TypeDateTime({ source: { pattern: "timestamp" }, pattern: "dd.MMM.yyyy HH:mm" }); //e.g. 22.12.2010 13:15

			return oType;
		},

		onQueueDepthScale: function (oValue) {
			// <!-- Scale - upto 50 L ; >50 & <100 - M; > 100 H 
			// Value - Numeric state will be based on threshold ; Green = 0 ; <100 Orange; > 100 Red 
			// indicator > if previous is < current ; up arrow; if previous > current value down row;
			// -->
			if (oValue < 50) {
				var Scale = 'L';

			} else if (oValue > 50 && oValue < 100)
			var Scale = "M";
			else{

	var Scale = "H";
}
return Scale;


		},
onQDIndicator: function (oValue) {
	if (oValue === 0)
		var Indicator = 'Green'
	else if (ovalue > 50 && ovalue < 100)
		var indicator = "Orange";
	else {
		var indicator = "red";
	}

	return Indicator;
},
oQDDirection: function (oEvent) {

	var oDirection = 'Up'
	return oDirection;
	var oCurrentValue = oEvent.getSource().getParameter('value');
	var previousValue = oEvent.getSource().getParameter('previousValue');
	if (previousValue < oCurrentValue)
		return oDirection;
	else oDirection = "Down"
	return oDirection;

},
	}
	});