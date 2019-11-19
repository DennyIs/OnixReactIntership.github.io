import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '../../elements/Button/Button';
import '../../scss/pages/home.scss';
import ThemeColorContext from '../../../context/ThemeContext';

const PageView = ({
  page, footerText, footerHref, footerText1, authorName, github, githubHref, topHref,
  topHref1, topHref2, topHref3, headerButton, headerButtonHref, scrollTop, scrollDown, upButton, downButton
}) => {
  return (
    <ThemeColorContext.Consumer>
      {
        ({ theme }) => (
          <div className={` ${theme ? 'bg_light' : 'bg_dark'} `}>
            <Header
              topHref={topHref}
              topHref1={topHref1}
              topHref2={topHref2}
              topHref3={topHref3}
              headerButton={headerButton}
              headerButtonHref={headerButtonHref}
            />
            {upButton && <Button className="btn_up" title="" onButtonClick={scrollTop} /> }
            {downButton && <Button className="btn_down" title="" onButtonClick={scrollDown} />}
            { page }
            <Footer
              footerText={footerText}
              footerHref={footerHref}
              footerText1={footerText1}
              authorName={authorName}
              github={github}
              githubHref={githubHref}
            />
          </div>
        )
      }
    </ThemeColorContext.Consumer>
  );
};

PageView.propTypes = {
  page: PropTypes.element.isRequired,
  footerText1: PropTypes.string,
  authorName: PropTypes.string,
  footerText: PropTypes.string,
  footerHref: PropTypes.string,
  github: PropTypes.string,
  githubHref: PropTypes.string,
  topHref: PropTypes.string,
  topHref1: PropTypes.string,
  topHref2: PropTypes.string,
  topHref3: PropTypes.string,
  headerButton: PropTypes.string,
  headerButtonHref: PropTypes.string,
  scrollTop: PropTypes.func,
  scrollDown: PropTypes.func,
  upButton: PropTypes.bool,
  downButton: PropTypes.bool,

};
PageView.defaultProps = {
  footerText1: '',
  authorName: '',
  footerText: '',
  footerHref: '',
  github: '',
  githubHref: '',
  topHref: '',
  topHref1: '',
  topHref2: '',
  topHref3: '',
  headerButton: '',
  headerButtonHref: '',
  scrollTop: undefined,
  scrollDown: undefined,
  upButton: undefined,
  downButton: undefined,

};

export default PageView;
