import React from 'react';
import PropTypes from 'prop-types';
import '../../../scss/layout/weather.scss';
import SweetAlert from 'sweetalert2-react';
import Button from '../../../elements/Button/Button';
import Input from '../../../elements/Input/Input';


const Biography = ({
  sortFunction, bubbleSort, updateEvent, insertElement, deleteElement,
  handleImageLoaded, handleImageError, handleMarked, onDragStart, onDragOver,
  onDragEnd, events, imgSrc, imageStatus, hasError, show
}) => {
  if (!hasError) {
    return (
      <>
        <div className="container">
          <div>
            <div className="gif_item">
              <img
                className="gif"
                alt="gif"
                src={imgSrc}
                onLoad={handleImageLoaded.bind(this)}
                onError={handleImageError.bind(this)}
              />
              <div>
                {imageStatus}
              </div>
            </div>
            <table>
              <tbody>

                <tr>
                  <th onClick={sortFunction}>
                    Year
                    <br />
                  </th>
                  <th onClick={bubbleSort}>
                    Event
                    <br />
                  </th>
                </tr>
                {
                  Object.entries(events).map(([index, row]) => (
                    <tr
                      onDragStart={(e) => onDragStart(e, index)}
                      draggable
                      onDragOver={() => onDragOver(index)}
                      onDragEnd={onDragEnd}
                      className={row.marked ? 'active' : ''}
                      onClick={handleMarked.bind(this, index)}
                      key={index}
                    >
                      <td className="date">{row.date}</td>
                      <td className="event">{row.event}</td>
                      <td>
                        <Button
                          className="button--table"
                          title="Удалить"
                          onButtonClick={
                            () => { deleteElement(index); }
                          }
                        />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="form_item">
              <Input id="insertDate" onInputChange={updateEvent} className="fields" placeholder="Date" />
              <Input id="insertEvent" onInputChange={updateEvent} className="fields" placeholder="Event" />
            </div>
            <div className="btn_item">
              <Button className="button--table" title="Добавить" onButtonClick={insertElement} />
            </div>
          </div>
        </div>
      </>
    );
  }
        
  return (
    <>
      <SweetAlert
        show={show}
        title="oops"
        text="Something went wrong"
      />
      <div className="section_header">
        <div className="section">
          <div className="container">
            <p className="error_massage">There must be something here, but it is not here =(</p>
            <input type="button" className="error_button" value="Report an error" />
          </div>
        </div>
      </div>
    </>

  );
};
Biography.propTypes = {
  events: PropTypes.objectOf(PropTypes.shape({
    date: PropTypes.string,
    event: PropTypes.string
  })),
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
  imgSrc: PropTypes.string,
  imageStatus: PropTypes.string,
  hasError: PropTypes.bool,
  show: PropTypes.bool
};
Biography.defaultProps = {
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
  events: '',
  imgSrc: '',
  imageStatus: '',
  hasError: '',
  show: ''
};
export default Biography;
