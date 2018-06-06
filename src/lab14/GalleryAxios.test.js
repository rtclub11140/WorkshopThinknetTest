import React from 'react';
import GalleryAxios from "./GalleryAxios";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, mount, render} from 'enzyme';
import sinon from 'sinon'
import axios from "axios";

describe('Test Asynchronous testing', () => {
  it('test gallery axios', () =>{
    const wrapper = shallow(<GalleryAxios/>, {disableLifecycleMethods: true});
    const instance = wrapper.instance();
    const mockGet = sinon.mock(axios).expects('get').once()
      .withExactArgs('http://www.mocky.io/v2/5b07eec23200005400700107')
      .resolves({data: []});
    const mockSetState = sinon.mock(instance).expects('setState').once()
      .withExactArgs({images:[]});

    return instance.fetchImages('http://www.mocky.io/v2/5b07eec23200005400700107')
      .then(() => {
        mockGet.verify()
        mockSetState.verify()
      })
  })
});

