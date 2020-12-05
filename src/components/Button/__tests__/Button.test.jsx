import React from 'react';
import { render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Button from '../Button';
import { sizes } from '../../../enums/sizeEnum';
import plusImg from '../../../../dev/img/plus.svg';

describe('<Button>', () => {
  it('renders small button', () => {
    const tree = render(<Button size={sizes.small}>Test Text</Button>);

    expect(tree).toMatchSnapshot();
  });

  it('renders default button', () => {
    const tree = render(<Button size={sizes.medium}>Test Text</Button>);

    expect(tree).toMatchSnapshot();
  });

  it('renders inversed button', () => {
    const tree = render(
      <Button inverse size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders loading button', () => {
    const tree = render(
      <Button isLoading size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders secondary loading button', () => {
    const tree = render(
      <Button use="secondary" isLoading size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(toJSON(tree)).not.toHaveStyleRule('opacity', '0.5');
    expect(tree).toMatchSnapshot();
  });

  it('renders secondary inversed loading button', () => {
    const tree = render(
      <Button use="secondary" inverse isLoading size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders tertiary inversed loading button', () => {
    const tree = render(
      <Button use="tertiary" inverse isLoading size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders tertiary loading button', () => {
    const tree = render(
      <Button use="tertiary" isLoading size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders secondary button', () => {
    const tree = render(
      <Button use="secondary" size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders secondary inversed button', () => {
    const tree = render(
      <Button use="secondary" inverse size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });
  it('renders tertiary button', () => {
    const tree = render(
      <Button use="tertiary" size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders tertiary inversed button', () => {
    const tree = render(
      <Button use="tertiary" inverse size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders with before element', () => {
    const tree = render(
      <Button before={<img src={plusImg} />} size={sizes.medium}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders with after element', () => {
    const tree = render(
      <Button after={<img src={plusImg} />} size={sizes.small}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });
  it('renders fullWidth button', () => {
    const tree = render(
      <Button fullWidth size={sizes.small}>
        Test Text
      </Button>
    );

    expect(tree).toMatchSnapshot();
  });
});
