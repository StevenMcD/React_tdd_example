import React from 'react';

import CommentList from '../../src/components/CommentList';
import {
  describeWithDOM,
  mount,
  shallow,
  spyLifecycle
} from 'enzyme';

describe('(Component) CommentList', () => {
  describeWithDOM('Lifecycle methods', () => {
    it('calls componentDidMount', ()=>{
      spyLifecycle(CommentList);

      const props = {
        onMount: () => {},
        isActive: false
      };

      mount(<CommentList {...props} />);

      expect(CommentList.prototype.componentDidMount.calledOnce)
        .to.be.true;
    });

    it('calls onMount prop once it mounts', ()=>{
      const props = {
        onMount: sinon.spy()
      };

      mount(<CommentList {...props} />);

      expect(props.onMount.calledOnce).to.be.true;
    });

    it('should render as a <ul>', () => {
      const props = { onMount: ()=>{} };
      const wrapper = shallow(<CommentList {...props} />);
      expect(wrapper.type()).to.eql('ul');
    });

    describe('when active...', ()=> {
      const wrapper = shallow(
        <CommentList onMount={() => {}} isActive />
      );

      it('should render with className active-list', ()=> {
        expect(wrapper.prop('className')).to.eql('active-list');
      });
    });

    describe('when inactive...', ()=> {
      const wrapper = shallow(
        <CommentList onMount={()=>{}} isActive={false} />
      );

      it('should render with className inactive-list', ()=>{
        expect(wrapper.prop('className')).to.eql('inactive-list');
      });
    });

  });
});
