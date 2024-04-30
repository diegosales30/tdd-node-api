
const config = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-node",
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  // collectCoverage: true,
  // coverageProvider: "v8",
};

export default config;

