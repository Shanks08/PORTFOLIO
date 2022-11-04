import { useState } from 'react';
import './contact.scss';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        <div className={'contact_details'}>
          <span>
            <a href="tel:+918013307251" target="_blank">
              <span className={'icon'}>
                <LocalPhoneOutlinedIcon />
              </span>
              <span className={'contact_site-name'}>+91-8013307251</span>
            </a>
          </span>
          <span>
            <a href="mailto:sakagami008@gmail.com" target="_blank">
              <span className={'icon'}>
                <AlternateEmailOutlinedIcon />
              </span>
              <span className={'contact_site-name'}>sakagami008@gmail.com</span>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/souryadeep-bhattacharya-0004671b1/"
              target="_blank"
            >
              <span className={'icon'}>
                <LinkedInIcon />
              </span>
              <span className={'contact_site-name'}>LinkedIn</span>
            </a>
          </span>
          <span>
            <a href="https://github.com/Shanks08" target="_blank">
              <span className={'icon'}>
                <GitHubIcon />
              </span>
              <span className={'contact_site-name'}>GitHub</span>
            </a>
          </span>
          <span>
            <a href="https://leetcode.com/Shanks_10/" target="_blank">
              <span className={'icon'}>
                <img src="assets/leetcode.svg" id="leetcode_icon" alt="" />
              </span>
              <span className={'contact_site-name'}>LeetCode</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
