import { shallow } from "enzyme";
import Comment from "../components/Comment";

const dummyComment = {
  commentInput: "Testingcomment",
  user: "juanitaj",
};

describe("Comment component", () => {
  it("should render correctly with given comment", () => {
    const component = shallow(<Comment key={0} comment={dummyComment} />);

    expect(component).toMatchSnapshot();
  });
});
