import social from "../assets/json/data_social_networks.json";

const SocialNetworks = () => {
  return (
    <div className="social-networks">
      {social.map((socialNet) => {
        return (
          <img
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
