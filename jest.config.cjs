// // // // // module.exports = {
// // // // //   preset: 'ts-jest',
// // // // //   testEnvironment: 'jsdom',
// // // // //   moduleNameMapper: {
// // // // //     '\\.(css|scss)$': 'identity-obj-proxy'
// // // // //   },
// // // // //   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
// // // // // }
// // // // module.exports = {
// // // //   testEnvironment: "jsdom",
// // // //   setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
// // // //   transform: {
// // // //     "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.app.json" }]
// // // //   },
// // // //   moduleFileExtensions: ["ts", "tsx", "js"]
// // // // };
// // // // module.exports = {
// // // //   preset: 'ts-jest',
// // // //   testEnvironment: 'jsdom',
// // // //   globals: {
// // // //     'ts-jest': {
// // // //       tsconfig: 'tsconfig.test.json'
// // // //     }
// // // //   },
// // // //   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
// // // // }
// // // module.exports = {
// // //   preset: 'ts-jest',
// // //   testEnvironment: 'jsdom',
// // //   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
// // // }
// // module.exports = {
// //   preset: 'ts-jest',
// //   testEnvironment: 'jsdom',
// //   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
// //   globals: {
// //     'ts-jest': {
// //       tsconfig: 'tsconfig.test.json'
// //     }
// //   }
// // }
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
// }
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  // Add the transform property below
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
};
