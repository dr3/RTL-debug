import { render } from 'react-testing-library';
import 'jest-styled-components';

export const shouldMatchSnapshot = (title, component) => {
  it(title, () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });
};