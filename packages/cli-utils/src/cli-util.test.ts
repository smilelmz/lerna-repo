import { testFun } from './cli-utils'

describe('cli-utils', () => {
  describe('test', () => {
    test('() => true', () => {
      expect(testFun()).toBe(true)
    })
  })
})
