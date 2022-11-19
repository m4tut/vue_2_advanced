module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '@/([^\\.]*)$': '<rootDir>/src/$1',
    '@app/([^\\.]*)$': '<rootDir>/src/app/$1',
    '@entities/([^\\.]*)$': '<rootDir>/src/entities/$1',
    '@features/([^\\.]*)$': '<rootDir>/src/features/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@processes/([^\\.]*)$': '<rootDir>/src/processes/$1',
    '@shared/([^\\.]*)$': '<rootDir>/src/shared/$1',
    '@widgets/([^\\.]*)$': '<rootDir>/src/widgets/$1',
    '@api/([^\\.]*)$': '<rootDir>/src/shared/api/$1',
    '@assets/([^\\.]*)$': '<rootDir>/src/shared/assets/$1',
    '@store/([^\\.]*)$': '<rootDir>/src/shared/store/$1',
    '@utils/([^\\.]*)$': '<rootDir>/src/shared/utils/$1',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/img.ts',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue2-jest',
  },
}
