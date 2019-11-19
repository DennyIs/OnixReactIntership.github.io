import React from 'react';
import '../../../scss/layout/table.scss';
import PropTypes from 'prop-types';
import LoaderHOC from '../../../../hoc/withLoader';


const Weather = ({
  temp, city, country, humidity, pressure, sunrise, sunset
}) => {
  return (
    <>
      <section className="section" id="#biography">
        <div className="container">
          {city ? (
            <table>
              <tbody>
                <tr>
                  <th>
                    Местоположение
                    <br />
                  </th>
                  <td className="city">
                    {city}
                    {' '}
                    {country}
                  </td>
                </tr>
                <tr>
                  <th>
                    Температура
                    <br />
                  </th>
                  <td className="temp">{temp}</td>
                </tr>
                <tr>
                  <th>
                    Влажность
                    <br />
                  </th>
                  <td className="humidity">
                    {humidity}
                    {' '}
                    %
                  </td>
                </tr>
                <tr>
                  <th>
                    Давление
                    <br />
                  </th>
                  <td className="pressure">
                    {pressure}
                    {' '}
                    hpa
                  </td>
                </tr>
                <tr>
                  <th>
                    Восход солнца
                    <br />
                  </th>
                  <td className="sunrise">{sunrise}</td>
                </tr>
                <tr>
                  <th>
                    Закат солнца
                    <br />
                  </th>
                  <td className="sunset">{sunset}</td>
                </tr>
              </tbody>
            </table>
          ) : '' }
        </div>
      </section>
    </>
  );
};
Weather.propTypes = {
  temp: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
};
Weather.defaultProps = {
  temp: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  pressure: undefined,
  sunrise: undefined,
  sunset: undefined,
};

const Loder = LoaderHOC(Weather);
export default Loder;
