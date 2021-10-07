import { shallow } from "enzyme";
import Idea from "../components/Idea";

const dummyIdea = {
  _id: "507f191e810c19729de860ea",
  content: "content",
  upVotes: 2,
  downVotes: 3,
  upVoters: [
    {
      _id: "507f191e810c19729de860eb",
      name: "Kevin",
      password: "Password",
    },
  ],
  downVoters: [
    {
      _id: "507f191e810c19729de860ec",
      name: "Kevin",
      password: "Password",
    },
  ],
  pinned: true,
  user: "Kevin",
};

describe("Idea component", () => {
  it("should render correctly with given idea", () => {
    const component = shallow(<Idea key={dummyIdea._id} idea={dummyIdea} />);

    expect(component).toMatchSnapshot();
  });
});
