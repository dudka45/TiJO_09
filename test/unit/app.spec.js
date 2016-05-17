describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return object with positive number and success message', function () {
            expect(answer.calculateArea(6, 2, 1, 'Success', 'Error')).toEqual({area: 4, message: 'Success'});
            expect(answer.calculateArea(99, 1, 1, 'Success', 'Error')).toEqual({area: 98, message: 'Success'});
            expect(answer.calculateArea(5, 3, 0, 'Success', 'Error')).toEqual({area: 5, message: 'Success'});
        });
        it('should return object with negative number and success message', function () {
            expect(answer.calculateArea(6, 7, 2, 'Success', 'Error')).toEqual({area: -5, message: 'Error'});
            expect(answer.calculateArea(3, 1, 4, 'Success', 'Error')).toEqual({area: -1, message: 'Error'});
            expect(answer.calculateArea(65, 34, 4, 'Success', 'Error')).toEqual({area: -71, message: 'Error'});
        });
        it('should return object with value 0 and null message', function () {
            expect(answer.calculateArea(4, 4, 1, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
            expect(answer.calculateArea(6, 6, 1, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
            expect(answer.calculateArea(1, 2, 2, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
        });
        it('should return false if params is incorrect', function () {
            expect(answer.calculateArea()).toEqual(false);
            expect(answer.calculateArea(204, '', '', '', '')).toEqual(false);
            expect(answer.calculateArea(304, 99, '', '', '')).toEqual(false);
            expect(answer.calculateArea(123, '', 431, '', '')).toEqual(false);
            expect(answer.calculateArea(42, 31, -1, 131, '')).toEqual(false);
            expect(answer.calculateArea(423, 434, 121, '', 321)).toEqual(false);
            expect(answer.calculateArea(1, 2, 3, 4, 5)).toEqual(false);
            expect(answer.calculateArea('', '', '', '', '')).toEqual(false);
        });
    });
});
