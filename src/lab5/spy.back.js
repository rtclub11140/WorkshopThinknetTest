import {runCallBack} from './spy'

describe('Test runCallback', () => {
  let spyCallback

  beforeAll(() => {
    spyCallback = sinon.spy()
  })

  afterAll(() => {
    spyCallback.restore()
  })

  afterEach(() => {
    spyCallback.restoreHistory()
  })

  it('Should return spy correct', () => {
      runCallBack(spyCallback)

      expect(spyCallback.callCount).toEqual(true)
  })

})

