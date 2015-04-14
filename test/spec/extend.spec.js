/**
 * @file extend spec
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var extend = require('extend');

        describe('extend test suite', function () {
            it('extend', function () {
                var source = {
                    a: 1,
                    b: 2
                };
                var source2 = {
                    c: 3
                };
                function A() {}
                A.prototype.name = 'a';

                var target = extend({}, source, source2, null, new A());
                expect(target.a).toBe(1);
                expect(target.b).toBe(2);
                expect(target.c).toBe(3);
                expect(target.name).toBeUndefined();
            });
        });
    }
);
