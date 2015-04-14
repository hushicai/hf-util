/**
 * @file inherits spec
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var inherits = require('inherits');

        describe('inherits test suite', function () {
            it('inherits', function () {
                function A() {}
                A.prototype.test = function () {
                    return 1;
                };

                function B() {
                    A.call(this);
                }
                inherits(B, A);

                var b = new B();

                expect(b instanceof A).toBe(true);
                expect(b.constructor).toBe(B);
                expect(b.superClass).toBe(A);
                expect(b.test).toBeDefined();
                expect(typeof b.test).toBe('function');
                expect(b.test()).toBe(1);
            });
        });
    }
);
