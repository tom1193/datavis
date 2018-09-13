window.utils = (function () {
    var utils = {
        currency_formatter: function (val) {
	    if (Math.abs(val) >= Math.pow(10,5)) return d3.format(".3s")
	    if (Math.abs(val) >= 10) return d3.format("d")
	    else return d3.format(".2f")
        }   
    };
     
    return utils;
}());
