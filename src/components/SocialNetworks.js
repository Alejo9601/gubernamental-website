import social from "../assets/json/data_social_networks.json";

const SocialNetworks = () => {
  return (
    <div className="social-networks">
      {social.map((socialNet, index) => {
        return (
          <img
            key={index}
            src={require(`../assets/icon/${socialNet.img}`)}
            alt={socialNet.name}
            id={socialNet.name}
          />
        );
      })}
    </div>
  );
};

export default SocialNetworks;
