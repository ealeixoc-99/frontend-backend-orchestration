import { render, screen, queryByAttribute  } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('test communication with count', () => {
  /const page = render(<App />);

  //const checkContent = screen.getByTestId("test-span");
  const checkContent = screen.getByTestId("test-span");
  var test = checkContent.outerHTML;
  console.log(test);

  console.log(page.getByTestId('test-span').textContent);

  setTimeout(async () => {
    const items = await screen.getByTestId("test-span");
    expect(items).toHaveLength(2);
  }, 8000)/
  //await wait(() => expect(screen.getByText("test 1")).toBeInTheDocument());
  // console.log(screen.getByRole('banner'));
  // console.log(firstState);
  //expect(Number(firstState) < Number(secondState));
});

it('Wait state change', async () => {
  let component;
  await act(async () => {
    component = render(<App />);
  })
  render(<App />);
  render(<App />);
  render(<App />);
  render(<App />);
  render(<App />);
  render(<App />);
  const element = component.getByTestId("test-span");
  console.log(element);
})