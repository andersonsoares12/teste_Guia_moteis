module.exports = {
    testEnvironment: 'node',
    reporters: [
      'default',
      ['jest-html-reporter', {
        outputPath: 'reports/test-report.html',
        pageTitle: 'Test Report'
      }]
    ],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testMatch: [
      '**/__tests__/**/*.js?(x)',
      '**/?(*.)+(spec|test).js?(x)',
    ],
  };
  