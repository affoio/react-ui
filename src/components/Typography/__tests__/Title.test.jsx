import React from 'react';
import { render } from 'enzyme';
import renderer from 'react-test-renderer';
import Title from '../Title';
import colors from '../../../colors';

describe('<Title>', () => {
  it('renders correctly', () => {
    const tree = render(<Title>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Title>);
    expect(tree).toMatchSnapshot();
  });

  it('render inversed Title', () => {
    const tree = renderer
      .create(<Title inverse>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Title>)
      .toJSON();

    expect(tree).toHaveStyleRule(`color: ${colors.white}`);
  });

  describe('renders with different levels', () => {
    const levels = ['1', '2', '3'];

    levels.forEach(level => {
      it(`render Title with size=${level}`, () => {
        const tree = render(
          <Title level={level}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Title>
        );
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
