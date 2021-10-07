import { shallow } from "enzyme";
import Comment from "../components/Comment";

const dummyComment = {
  user: "Juanitajhh",
  commentInput: "Just testhing these things",
};

describe("Comment component", () => {
  it("should render correctly with given comment", () => {
    const component = shallow(<Comment key={0} idea={dummyComment} />);

    expect(component).toMatchSnapshot();
  });
});
