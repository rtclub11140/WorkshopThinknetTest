import sinon from 'sinon'
import {getRandomNumber} from './stub'

describe('Test getRandomNumber', () => {
  it('Should call Math.random and math.floor correctly', () => {
      const stubRandom = sinon.stub(Math, 'random').callsFake(() => 0.55)
      const stubFloor = sinon.stub(Math, 'floor').withArgs(6.5).returns(6)

      const number = getRandomNumber()

      expect(stubRandom.callCount).toEqual(1)
      expect(stubFloor.callCount).toEqual(1)
      expect(stubFloor.withArgs(6.5).callCount).toEqual(1)
      expect(stubFloor.calledWith(6.5)).toEqual(true)
      expect(stubFloor.calledOnceWith(6.5)).toEqual(true)
  })
})

