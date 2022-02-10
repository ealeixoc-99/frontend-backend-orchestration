import 'react-dom/test-utils';
import App from './App';
import axios from "axios";

test('Test communication between Front and Back', async () => {
  const res = axios.get("http://localhost:5000/express_backend")
  expect((await res).status).toBe(200);
})

test("Test counter one interation", async() => {
  const res = axios.get("http://localhost:5000/express_backend")
  var count_one = (await res).data.express;
  expect(count_one).toEqual(1);
})

test("Test counter two iterations one count", async() => {
  const res = axios.get('http://localhost:5000/express_backend');
  const res_2 = axios.get('http://localhost:5000/express_backend');

  var count_one = (await res).data.express;
  var count_two = (await res_2).data.express;
  
  expect([count_one,count_two]).toEqual([1,1]);
})