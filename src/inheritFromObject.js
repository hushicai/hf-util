/**
 * @file inheritFromObject
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var fn = Object.create;

        if (!fn) {
            fn = function (proto) {
                var F = function () {};
                F.prototype = proto;
                return new F();
            };
        }

        return fn;
    }
);
