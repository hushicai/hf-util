/**
 * @file inherits
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function inherits(subClass, superClass) {
            var proto = subClass.prototype;

            var Class = function () {};
            Class.prototype = superClass.prototype;
            subClass.prototype = new Class();

            var extend = require('./extend');
            extend(subClass.prototype, proto);

            subClass.prototype.constructor = subClass;
            subClass.prototype.superClass = superClass;

            return subClass;
        }
        return inherits;
    }
);
