import { parseFile } from '../config';

test('it will be an error, if there is no file', () => {
    expect(parseFile('../')).toEqual('File error');
});