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
  });
});
