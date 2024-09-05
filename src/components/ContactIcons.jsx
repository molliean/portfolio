import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGoodreads, faArtstation } from '@fortawesome/free-brands-svg-icons'

const ContactIcon = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-sage hover:text-aqua mx-2">
      <FontAwesomeIcon icon={icon} className="h-8 w-8" />
    </a>
  );
};

const ContactIcons = () => {
  return (
    <div className="flex justify-start space-x-6">
      <ContactIcon icon={faGithub} link="https://github.com/molliean"/>
      <ContactIcon icon={faLinkedin} link="https://www.linkedin.com/in/mollie-anderson/" />
      <ContactIcon icon={faGoodreads} link="https://www.goodreads.com/molliean29" />
      <ContactIcon icon={faArtstation} link="" />
    </div>
  );
};

export default ContactIcons;