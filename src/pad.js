/**
 * @file pad
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        /**
         * pad
         *
         * @public
         * @param {string} str 字符串
         * @param {?number} len 长度
         * @param {?string} ch 填充的字符
         * @return {string} padded string
         */
        function pad(str, len, ch) {
            len = len || 2;
            ch = ch || '0';
            var a = new Array(len);
            str = a.join(ch) + str;
            return str.slice(-len);
        }
        return pad;
    }
);
