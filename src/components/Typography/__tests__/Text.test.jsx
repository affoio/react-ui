import React from 'react';
import { render } from 'enzyme';
import renderer from 'react-test-renderer';
import Text from '../Text';
import colors from '../../../colors';

describe('<Text>', () => {
  it('renders correctly', () => {
    const tree = render(<Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Text>);
    expect(tree).toMatchSnapshot();
  });

  it('render inversed Text', () => {
    const tree = renderer
      .create(<Text inverse>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Text>)
      .toJSON();

    expect(tree).toHaveStyleRule(`color: ${colors.white}`);
  });

  it('render uppercased Text', () => {
    const tree = renderer
      .create(<Text uppercase>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Text>)
      .toJSON();

    expect(tree).toHaveStyleRule('text-transform: upppercase');
  });

  it('render Text with fontWeight', () => {
    const tree = renderer
      .create(
        <Text fontWeight="bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Text>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('font-weight: bold');
  });

  describe('renders with different sizes', () => {
    const sizes = ['100', '200', '300', '400', '500', '600'];

    sizes.forEach(size => {
      it(`render Text with size=${size}`, () => {
        const tree = render(
          <Text size={size}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</Text>
        );
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
