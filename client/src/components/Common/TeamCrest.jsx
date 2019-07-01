import React from "react";
import PropTypes from "prop-types";

import teamNameToSvg from "../../utilities/teamNameToSvg";
import Image from "./Image";

const TeamCrest = ({ name }) => (
  <Image className="team-crest" src={teamNameToSvg(name)} />
);

TeamCrest.propTypes = {
  name: PropTypes.string.isRequired
};

export default TeamCrest;
