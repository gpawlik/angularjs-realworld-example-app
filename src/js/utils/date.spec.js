import { getLongDate } from './date';

describe('getLongDate', () => {
    it('returns correctly formatted valid date', () => {
        const input = '2019-09-01 16:30';

        expect(getLongDate(input)).toEqual('September 01, 2019');
    });

    it('returns correctly formatted iinvalid date', () => {
        const input = '2019-13-01 16:30';

        expect(getLongDate(input)).toEqual('Invalid date');
    });
});
