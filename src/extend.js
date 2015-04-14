/**
 * @file extend
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function extend(target, source) {
            for (var i = 1, len = arguments.length; i < len; i++) {
                source = arguments[i] || {};
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        }
        return extend;
    }
);
