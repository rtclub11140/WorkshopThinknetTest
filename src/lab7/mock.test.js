import sinon from 'sinon'
import {getRandomNumberMock} from './mock'

describe('Test getRandomNumber mock', () => {
  it('Should call Math.random and math.floor correctly in mock', () => {
    const mockRandom = sinon.mock(Math).expects('random').once().returns(0.55)
    const mockFloor = sinon.mock(Math).expects('floor').once().withExactArgs(6.5).returns(6)     
    const number = getRandomNumberMock()

    mockRandom.verify();
    mockFloor.verify();

  })
})
