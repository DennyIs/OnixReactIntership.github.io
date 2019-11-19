import React from 'react';
import PropTypes from 'prop-types';
import preloader from '../assets/images/Preloader.gif';
import Input from '../components/elements/Input/Input';
import Button from '../components/elements/Button/Button';
import ThemeColorContext from '../context/ThemeContext';

/* Weather Preloader */

const LoaderHOC = (WrappedComponent) => {
  class loaderHOC extends React.Component {
    isEmpty = (prop) => {
      return (
        prop === null
                || prop === undefined
                || (Array.isArray(prop) && prop.length === 0)
                || (prop.constructor === Object && Object.keys(prop).length === 0)
      );
    };

    render() {
      const { handleChange, getWeather, city } = this.props;
      return (
        <ThemeColorContext.Consumer>
          {
              ({ theme }) => (

                <section className={`section_header ${theme ? 'text_light' : 'text_dark'} `} id="#biography">
                  <div className="container">
                    <div className="section_header">
                      <h3 className="section_subtitle">Weather</h3>
                      <h2 className="section_title">Enter the name of the city in Latin letters</h2>
                    </div>
                    <div className="weather_form">
                      <div className="form_item">
                        <Input onInputChange={handleChange} id="mycity" className="fields" placeholder="Город" />
                        <Button className="button--table" title="Показать погоду" onButtonClick={getWeather} />
                      </div>
                    </div>
                  </div>
                  {
                    this.isEmpty(city)
                      ? (
                        <div className="gif_item">
                          <img
                            className="gif"
                            alt="gif"
                            src={preloader}
                          />
                        </div>
                      )
                    // eslint-disable-next-line react/jsx-props-no-spreading
                      : <WrappedComponent {...this.props} />
                }
                </section>
              )
            }
        </ThemeColorContext.Consumer>
      );
    }
  }
  loaderHOC.propTypes = {
    city: PropTypes.string,
    handleChange: PropTypes.func,
    getWeather: PropTypes.func,
  };
  loaderHOC.defaultProps = {
    handleChange: undefined,
    getWeather: undefined,
    city: undefined
  };
  return loaderHOC;
};

export default LoaderHOC;
