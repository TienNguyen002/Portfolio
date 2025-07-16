import { socials } from "../../constants";

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon: Icon, path }, index) => (
        <a
          href={path}
          key={index}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
