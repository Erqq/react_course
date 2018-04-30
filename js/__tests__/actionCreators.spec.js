import moxios from "moxios";
import { setSearchTerm, addAPIData } from "../actionCreators";
import getAPIDetails from "../asyncActions";

test("setSearchTerm", () => {
  expect(setSearchTerm("New York")).toMatchSnapshot();
});
const strangerThings = {
  title: "Billions",
  year: "2016–",
  description:
    'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
  poster: "b.jpg",
  imdbID: "tt4270492",
  trailer: "_raEUMLL-ZI",
  rating: "9.8"
};
test("addAPIData", () => {
  expect(addAPIData(strangerThings)).toMatchSnapshot;
});
test("getAPIData", done => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getAPIDetails(strangerThings.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: strangerThings
        })
        .then(() => {
          expect(request.url).toEqual(
            `http://localhost:3000/${strangerThings.imdbID}`
          );
          expect(dispatchMock).toBeCalledWith(addAPIData(strangerThings));
          done();
        });
    });
  });
});
