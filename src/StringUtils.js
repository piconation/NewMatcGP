/**
 * Created by mattpowell on 12/16/16.
 */

var StringUtils = (function() {
    var vm = {};

    vm.capitalize = capitalize;
    vm.format = format;
    return vm;

    //------------------------------------------------------------------------------------------------------------------
    function capitalize(str) {
        return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    function format(formatString) {
        var formatResult = formatString;

        for (var i = 0; (i + 1) < arguments.length; i++) {
            var placeholder = "\\{" + i + "\\}";
            var regex = new RegExp(placeholder, "g");
            // Skip the first argument, the format string
            var replacement = arguments[i + 1];
            formatResult = formatResult.replace(regex, replacement);
        }
        return formatResult;
        /*Should format a string replacing placeholders.
         e.g.:
         format("I love {0}", "soccer") -> I love soccer
         formatString("I love {0}, baseball is {1}.", "soccer", "lame") -> I love soccer, baseball is lame.
        formatString("I love {0}. Baseball is {1}. Badminton is {2}.", "football", "slow and boring to watch but fun to play", "for retired people")  */
    }
}());