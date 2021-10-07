import { useEffect, useState, useRef } from "react";
import { postIdea } from "../common/requests/Idea";

const getCurrentUserVote = (idea, currentUser) => {
  if (idea.upVoters.length === 0 && idea.downVoters.length === 0) {
    return 0;
  } else if (currentUser) {
    var i;
    for (i = 0; i < idea.upVoters.length; i++) {
      if (idea.upVoters[i].name === currentUser) {
        return 1;
      }
    }
    for (i = 0; i < idea.downVoters.length; i++) {
      if (idea.downVoters[i].name === currentUser) {
        return -1;
      }
    }
  }
  return 0;
};

const VotingMechanism = ({ idea, user }) => {
  const [userVote, setUserVote] = useState(getCurrentUserVote(idea, user.name));
  const [upVoters, setUpVoters] = useState(idea.upVoters);
  const [downVoters, setDownVoters] = useState(idea.downVoters);
  const [upVotes, setUpVotes] = useState(idea.upVotes);
  const [downVotes, setDownVotes] = useState(idea.downVotes);
  const didMount = useRef(true);

  const removeUserVoteFromIdea = () => {
    let newUpVotersList = upVoters.filter((upVoteUser) => {
      return upVoteUser.name !== user.name;
    });
    setUpVoters(newUpVotersList);

    const newDownVotersList = downVoters.filter((downVoteUser) => {
      return downVoteUser.name !== user.name;
    });
    setDownVoters(newDownVotersList);
  };

  const addUserToVote = (vote) => {
    if (vote == 1) {
      setUpVoters([...upVoters, user]);
    } else if (vote == -1) {
      setDownVoters([...downVoters, user]);
    }
  };

  useEffect(() => {
    removeUserVoteFromIdea();
    addUserToVote(userVote);
  }, [userVote]);

  useEffect(() => {
    if (didMount.current) {
      if ((idea.upVotes != upVotes) | (idea.downVotes != downVotes)) {
        postIdea(
          idea._id,
          idea.content,
          upVotes,
          downVotes,
          upVoters,
          downVoters,
          idea.pinned,
          user.name
        );
        window.location.reload();
      }
    } else {
      didMount.current = true;
    }
  }, [downVoters, upVoters]);

  const handleVoteChange = (vote) => {
    setUserVote(vote);
  };

  const incrementUpVotes = () => {
    if (userVote === -1) {
      setUpVotes(upVotes + 1);
      setDownVotes(downVotes - 1);
      handleVoteChange(1);
    } else if (userVote === 0) {
      setUpVotes(upVotes + 1);
      handleVoteChange(1);
    } else {
      setUpVotes(upVotes - 1);
      handleVoteChange(0);
    }
  };

  const incrementDownVotes = () => {
    if (userVote === 1) {
      setDownVotes(downVotes + 1);
      setUpVotes(upVotes - 1);
      handleVoteChange(-1);
    } else if (userVote === 0) {
      setDownVotes(downVotes + 1);
      handleVoteChange(-1);
    } else {
      setDownVotes(downVotes - 1);
      handleVoteChange(0);
    }
  };

  const upVoteButtonColor = userVote == 1 ? "lime" : "none";
  const downVoteButtonColor = userVote == -1 ? "orangered" : "none";
  return (
    <div className="flex-component flex-30 flex-end flex-container">
      <div className="flex-component">
        <svg
          className="h-6 w-6 icon"
          xmlns="http://www.w3.org/2000/svg"
          fill={downVoteButtonColor}
          viewBox="0 0 24 24"
          stroke="red"
          onClick={incrementDownVotes}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
          />
        </svg>
      </div>
      <div className="flex-component">
        <p className="big centered">{upVotes - downVotes}</p>
      </div>
      <div className="flex-component">
        <svg
          className="h-6 w-6 icon"
          xmlns="http://www.w3.org/2000/svg"
          fill={upVoteButtonColor}
          viewBox="0 0 24 24"
          stroke="green"
          onClick={incrementUpVotes}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default VotingMechanism;
