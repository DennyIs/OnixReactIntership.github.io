import React from 'react';
import PropTypes from 'prop-types';
import octocat from '../../../assets/images/octocat.png';
import '../../scss/layout/footer.scss';
import ThemeColorContext from '../../../context/ThemeContext';


const Footer = ({
  footerText1, authorName, footerText, footerHref, github, githubHref
}) => {
  return (
    <ThemeColorContext.Consumer>
      {
          ({ theme }) => (
            <footer className={`section_header ${theme ? 'text_light' : 'text_dark'} `}>
              <div className="container">
                <div className="footer_title">
                  {footerText1}
                </div>
                <div className="footer_subtitle">
                  {authorName}
                </div>
                <div className="footer_title">
                  {footerText}
                </div>
                <div className="footer_subtitle">
                  <a className="footer_link" href={footerHref}>Layout</a>
                </div>
                <div className="footer_title">
                  {github}
                </div>
                <div className="footer_subtitle">
                  <a className="footer_link" href={githubHref}>
                    <img className="footer_img" src={octocat} alt="Icon" />
                  </a>
                </div>
              </div>
            </footer>
          )
        }
    </ThemeColorContext.Consumer>
  );
};
Footer.propTypes = {
  footerText1: PropTypes.string,
  authorName: PropTypes.string,
  footerText: PropTypes.string,
  footerHref: PropTypes.string,
  github: PropTypes.string,
  githubHref: PropTypes.string,

};
Footer.defaultProps = {
  footerText1: '',
  authorName: '',
  footerText: '',
  footerHref: '',
  github: '',
  githubHref: '',

};
export default Footer;
