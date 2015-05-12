/**
 * @file camelize
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function camelize(property) {
            if (property.indexOf('-') < 0) {
                return property;
            }
            return property.replace(/[-][^-]/g, function (match) {
                return match.charAt(1).toUpperCase();
            });
        }
        return camelize;
    }
);
