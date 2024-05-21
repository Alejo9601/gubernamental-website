import Facebook from '../SVGIcons/Facebook';
import Instagram from '../SVGIcons/Instagram';
import WhatsApp from '../SVGIcons/WhatsApp';

export default function SocialNetworks() {
  return (
    <ul className="social-networks">
      <li>
        <Facebook></Facebook>
      </li>
      <li>
        <Instagram></Instagram>
      </li>
      <li>
        <WhatsApp></WhatsApp>
      </li>
    </ul>
  );
}
