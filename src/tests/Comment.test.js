import { shallow } from "enzyme";
import Comment from "../components/Comment";

// This is the comment test for the automated unit test for the frontend. This is testing the comments
// This is used for the Comment.test.snapshot Further details about front end testing is found in the report

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
