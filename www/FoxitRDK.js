var exec = require('cordova/exec');

var FoxitPDF = function(){};

FoxitPDF.prototype.init = function(success, error) {
    exec(success, error, "FoxitRDK", "init", []);
};

FoxitPDF.prototype.openDoc = function(arg0, success, error) {
    exec(success, error, "FoxitRDK", "openDoc", [arg0]);
};

var foxitPDF = new FoxitPDF();

module.exports = foxitPDF;
