import { shallow } from "enzyme";
import PollSubmission from "../components/PollSubmission";

describe("PollSubmission component", () => {
  it("should render correctly with given idea", () => {
    const component = shallow(<PollSubmission />);

    expect(component).toMatchSnapshot();
  });
});
