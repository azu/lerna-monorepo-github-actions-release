const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?)$';
module.exports = {
  testRegex: TEST_REGEX,
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testURL: 'http://localhost'
};
