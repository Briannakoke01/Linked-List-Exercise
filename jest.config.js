module.exports = {
    clearMocks: true,
  
    testEnvironment: 'node',
  
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  
    moduleFileExtensions: ['js', 'json', 'node'],
  
    coverageDirectory: 'coverage',
  
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
  
    watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  
    verbose: true,
  };
  