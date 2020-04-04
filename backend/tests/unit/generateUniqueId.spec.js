const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique IID', () => {
    it('should generate an unique ID', () => {
       const id = generateUniqueId();

       expect(id).toHaveLength(8);
    });
});