import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/pages/home.scss';
import serv1 from '../../../assets/images/serv1.png';
import serv2 from '../../../assets/images/serv2.png';
import serv3 from '../../../assets/images/serv3.png';
import serv4 from '../../../assets/images/serv4.png';
import alarm from '../../../assets/images/alarm.png';
import lineGraph from '../../../assets/images/line_graph.png';
import computer from '../../../assets/images/computer.png';
import book from '../../../assets/images/book.png';
import home from '../../../assets/images/home.png';
import image from '../../../assets/images/image.png';
import picture from '../../../assets/images/picture.png';
import equalizer from '../../../assets/images/equalizer.png';
import bullseye from '../../../assets/images/bullseye.png';
import pin from '../../../assets/images/pin.png';
import ipad from '../../../assets/images/ipad.png';
import iphone from '../../../assets/images/iphone.png';
import Biography from './components/Biography';
import Weather from './components/Weather';
import ThemeColorContext from '../../../context/ThemeContext';


const HomeView = ({
  sortFunction, bubbleSort, updateEvent, insertElement, deleteElement,
  handleImageLoaded, handleImageError, handleMarked, onDragStart, onDragOver,
  onDragEnd, getWeather, handleChange, events, imgSrc, imageStatus,
  mycity, hasError, show, weather, temp, city, country, humidity, pressure, sunrise, sunset, error
}) => {
  return (
    <ThemeColorContext.Consumer>
      {
          ({ theme }) => (
            <div className="App">
              <section className="section" id="#biography">
                <div className="container">
                  <div className={`section_header ${theme ? 'text_light' : 'text_dark'} `}>
                    <h3 className="section_subtitle">Biography</h3>
                    <h2 className="section_title">Story about me</h2>
                    <div className="section_text">
                      <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  <Biography
                    sortFunction={sortFunction}
                    bubbleSort={bubbleSort}
                    updateEvent={updateEvent}
                    insertElement={insertElement}
                    deleteElement={deleteElement}
                    handleImageLoaded={handleImageLoaded}
                    handleImageError={handleImageError}
                    handleMarked={handleMarked}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDragEnd={onDragEnd}

                    hasError={hasError}
                    events={events}
                    imgSrc={imgSrc}
                    show={show}
                    imageStatus={imageStatus}
                    classes={events.classes}
                  />
                </div>
              </section>
              <section className="section" id="#about">
                <div className="container">
                  <div className={`section_header ${theme ? 'text_light' : 'text_dark'} `}>
                    <h3 className="section_subtitle">What we do</h3>
                    <h2 className="section_title">Story about us</h2>
                    <div className="section_text">
                      <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  <div className="about">
                    <div className="about_item">
                      <div className="about_inner">
                        <div className="about_image">
                          <img src={serv3} alt="Services" />
                        </div>
                        <div className="about_text">super team</div>
                      </div>
                    </div>
                    <div className="about_item">
                      <div className="about_inner">
                        <div className="about_image">
                          <img src={serv1} alt="Services" />
                        </div>
                        <div className="about_text">super team</div>
                      </div>
                    </div>
                    <div className="about_item">
                      <div className="about_inner">
                        <div className="about_image">
                          <img src={serv2} alt="Services" />
                        </div>
                        <div className="about_text">super team</div>
                      </div>
                    </div>
                  </div>
                </div>

              </section>
              <section className="section" id="services">
                <div className="container">

                  <div className={`section_header ${theme ? 'text_light' : 'text_dark'} `}>
                    <h3 className="section_subtitle">We work with</h3>
                    <h2 className="section_title">Amazing Services</h2>
                  </div>
                  <div className="services">

                    <div className="services_item services_item--border">
                      <img className="services_img" src={alarm} alt="Icon" />
                      <div className="services_title">Photography</div>
                      <div className="services_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor.
                      </div>
                    </div>
                    <div className="services_item services_item--border">
                      <img className="services_img" src={lineGraph} alt="Icon" />
                      <div className="services_title">Web Design</div>
                      <div className="services_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor.
                      </div>
                    </div>
                    <div className="services_item services_item--border">
                      <img className="services_img" src={computer} alt="Icon" />
                      <div className="services_title">Creativity</div>
                      <div className="services_text">
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      </div>
                    </div>

                    <div className="services_item">
                      <img className="services_img" src={book} alt="Icon" />
                      <div className="services_title">SEO</div>
                      <div className="services_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </div>
                    </div>

                    <div className="services_item">
                      <img className="services_img" src={home} alt="Icon" />
                      <div className="services_title">Css/HTML</div>
                      <div className="services_text">
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </div>
                    </div>

                    <div className="services_item">
                      <img className="services_img" src={image} alt="Icon" />
                      <div className="services_title">Digital</div>
                      <div className="services_text">
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section--devices" id="design">
                <div className="devices">
                  <div className="container">
                    <div className="section_header">
                      <h3 className="section_subtitle">For all devices</h3>
                      <h2 className="section_title">Unique design</h2>
                    </div>
                    <div className="devices">
                      <img className="devices_img" src={ipad} alt="Icon" />
                      <img className="devices_img devices_img--iphone" src={iphone} alt="Icon" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="container">
                  <div className={`section_header ${theme ? 'text_light' : 'text_dark'} `}>
                    <h3 className="section_subtitle">Service</h3>
                    <h2 className="section_title">What we do</h2>
                    <div className="section_text">
                      <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  <div className="what_we_do">
                    <div className="wedo_item">
                      <img className="what_we_do_img" src={serv4} alt="Icon" />
                    </div>
                    <div className="wedo_item">
                      <div className="accordion">
                        <div className="accordion_item active_ac ">
                          <div className="accordion_header">
                            <img className="accordion_img" src={picture} alt="Icon" />
                            <div className="accordion_title">Photography</div>
                          </div>
                          <div className="accordion_text ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                          </div>
                        </div>
                        <div className="accordion_item">
                          <div className="accordion_header">
                            <img className="accordion_img" src={equalizer} alt="Icon" />
                            <div className="accordion_title">Creativity</div>
                          </div>
                          <div className="accordion_text">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </div>

                        </div>
                        <div className="accordion_item">
                          <div className="accordion_header">
                            <img className="accordion_img" src={bullseye} alt="Icon" />
                            <div className="accordion_title">Web Design</div>
                            <div className="accordion_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <Weather
                  weather={weather}
                  handleChange={handleChange}
                  getWeather={getWeather}
                  mycity={mycity}
                  temp={temp}
                  city={city}
                  country={country}
                  humidity={humidity}
                  pressure={pressure}
                  sunrise={sunrise}
                  sunset={sunset}
                  error={error}
                />
              </section>
              <section className="section">

                <div className="map">
                  <div className="map_content">
                    <img src={pin} alt="Icon" />
                    <h2 className="section_title">Open map</h2>
                  </div>
                </div>
              </section>
            </div>
          )
        }
    </ThemeColorContext.Consumer>
  );
};
HomeView.propTypes = {
  mycity: PropTypes.string,
  sortFunction: PropTypes.func,
  bubbleSort: PropTypes.func,
  updateEvent: PropTypes.func,
  insertElement: PropTypes.func,
  deleteElement: PropTypes.func,
  handleImageLoaded: PropTypes.func,
  handleImageError: PropTypes.func,
  handleMarked: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragEnd: PropTypes.func,
  events: PropTypes.objectOf(
    PropTypes.shape({
      date: PropTypes.string,
      event: PropTypes.string
    })
  ),
  imgSrc: PropTypes.string,
  imageStatus: PropTypes.string,
  hasError: PropTypes.bool,
  show: PropTypes.bool,
  handleChange: PropTypes.func,
  getWeather: PropTypes.func,
  weather: PropTypes.objectOf(PropTypes.object),
  temp: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
  error: PropTypes.string,

};
HomeView.defaultProps = {
  sortFunction: undefined,
  bubbleSort: undefined,
  updateEvent: undefined,
  insertElement: undefined,
  deleteElement: undefined,
  handleImageLoaded: undefined,
  handleImageError: undefined,
  handleMarked: undefined,
  onDragStart: undefined,
  onDragOver: undefined,
  onDragEnd: undefined,
  events: undefined,
  imgSrc: '',
  imageStatus: '',
  hasError: '',
  show: '',
  handleChange: undefined,
  getWeather: undefined,

  mycity: '',
  weather: undefined,
  temp: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  pressure: undefined,
  sunrise: undefined,
  sunset: undefined,
  error: undefined,

};
export default HomeView;
