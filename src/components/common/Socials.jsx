import { Link } from "react-router-dom";

import { socials } from "../../constants";

console.log(socials);

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon: Icon, path }, index) => (
        <Link href={path} key={index} className={iconStyles}>
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
