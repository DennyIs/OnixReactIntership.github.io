import React, { Component } from 'react';

import HomeView from './HomeView';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mycity: '',
      show: true,
      temp: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      pressure: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: undefined,
      hasError: false,
      insertDate: '',
      insertEvent: '',
      startIndex: null,
      finishIndex: null,
      imageStatus: 'loading',
      imgSrc: 'https://i.gifer.com/72gi.gif',
      events:
        {
          0:
            {
              date: '1996',
              event: 'Год рождения',
              classes: [],
            },
          1:
            {
              date: '2002',
              event: 'Начало учебы в школе',
              classes: [],
            },
          2:
            {
              date: '2011',
              event: 'Закончил школу и поступил в колледж',
              classes: [],
            },
          3:
            {
              date: '2015',
              event: 'Закончил колледж',
              classes: [],
            },
          4:
            {
              date: '2015',
              event: 'Начал обудение в КНТУ',
              classes: [],
            },
          5:
            {
              date: '2018',
              event: 'Начал учить программирование',
              classes: [],
            },
          6:
            {
              date: '2018',
              event: 'Окончил бакалаврат и перешел на магистратуру',
              classes: [],
            }
        },
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /* Weather */
  handleChange = (event) => {
    const { target: { id, value } } = event;
    this.setState({
      [id]: value
    });
  };

  getWeather = () => {
    const { mycity } = this.state;

    if (mycity !== '') {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${mycity}
      &appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
          const { sunset } = data.sys;
          const date = new Date(+sunset * 1000);
          const sunsetTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
          const { sunrise } = data.sys;
          const date1 = new Date(+sunrise * 1000);
          const sunriseTime = `${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`;
          window.setTimeout(() => {
            this.setState({
              temp: data.main.temp,
              city: data.name,
              country: data.sys.country,
              humidity: data.main.humidity,
              pressure: data.main.pressure,
              sunrise: sunriseTime,
              sunset: sunsetTime,
              error: ''
            });
          }, 3000);
        })
        .catch((e) => {
          return e;
        });
    }
    return false;
  };


  /* Biography */


  sortFunction = () => {
    const { events } = this.state;
    const updSort = false;
    const arrList = Object.values(events);
    let sortArrList;
    if (updSort) {
      sortArrList = arrList.sort((a, b) => ((+a.date) - (+b.date)));
    } else {
      sortArrList = arrList.reverse();
    }

    this.setState({
      events: { ...sortArrList },

    });
  };


  bubbleSort = () => {
    const { events } = this.state;
    const arrList = Object.values(events);
    const keys = Object.keys(arrList);
    for (let i = keys.length - 1; i >= 0; i -= 1) {
      for (let j = 0; j < i; j += 1) {
        const cur = arrList[j];
        const prev = arrList[j + 1];

        if (cur.event.toLowerCase() > prev.event.toLowerCase()) {
          const temp = arrList[j];
          arrList[j] = arrList[j + 1];
          arrList[j + 1] = temp;
        }
      }
    }
    this.setState({
      events: { ...arrList },
    });
  };

  updateEvent = (event) => {
    const { target: { id, value } } = event;
    this.setState({
      [id]: value
    });
  };

  insertElement = () => {
    const { events } = this.state;
    const updEvents = Object.values(events);
    const { insertDate } = this.state;
    const { insertEvent } = this.state;
    if (!insertDate || !insertEvent) {
      return;
    }
    if (Number.isNaN(insertDate)) {
      return;
    }
    if (insertDate <= 1990 || insertDate >= 3000) {
      return;
    }
    updEvents[Object.keys(updEvents).length] = {
      date: insertDate,
      event: insertEvent
    };
    this.setState({
      events: { ...updEvents }
    });
  };

  deleteElement = (index) => {
    const { events } = this.state;
    delete events[index];

    this.setState({
      events: { ...Object.values(events) }
    });
  };

  handleImageLoaded = () => {
    this.setState({ imageStatus: 'Loaded' });
  };

  handleImageError = () => {
    this.setState({ imageStatus: 'failed to load' });
  };

  handleMarked = (index, e) => {
    const { events } = this.state;
    const updEvents = Object.values(events);
    if (!e.ctrlKey && !e.altKey) {
      return;
    }
    if (e.ctrlKey && updEvents[index].marked) {
      updEvents[index].marked = false;
      updEvents[index].classes = '';
    } else {
      updEvents[index].marked = true;
      updEvents[index].classes = 'active';
    }
    this.setState({
      events: { ...updEvents }
    });
  };

  onDragStart = (e, index) => {
    const { events } = this.state;
    this.draggedItem = Object.values(events[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
    this.setState({
      startIndex: index
    });
  };

  onDragOver = (index) => {
    const { events } = this.state;
    const draggedOverItem = Object.values(events[index]);
    if (this.draggedItem === draggedOverItem) {
      return;
    }
    this.setState({
      finishIndex: index
    });
  };

  onDragEnd = () => {
    const { events, startIndex, finishIndex } = this.state;
    const start = events[startIndex];
    events[startIndex] = events[finishIndex];
    events[finishIndex] = start;
    this.setState({
      events,
      startIndex: null,
      finishIndex: null
    });
  };


  render() {
    const {
      events, imgSrc, imageStatus, hasError, show, mycity, weather, temp, city, country,
      humidity, pressure, sunrise, sunset, error
    } = this.state;
    return (
      <HomeView
        updateEvent={this.updateEvent}
        insertElement={this.insertElement}
        deleteElement={this.deleteElement}
        handleImageLoaded={this.handleImageLoaded}
        handleImageError={this.handleImageError}
        handleMarked={this.handleMarked}
        onDragStart={this.onDragStart}
        onDragOver={this.onDragOver}
        onDragEnd={this.onDragEnd}
        getWeather={this.getWeather}
        handleChange={this.handleChange}
        sortFunction={this.sortFunction}
        bubbleSort={this.bubbleSort}

        events={events}
        imgSrc={imgSrc}
        imageStatus={imageStatus}
        classes={events.classes}
        mycity={mycity}
        hasError={hasError}
        show={show}
        weather={weather}
        temp={temp}
        city={city}
        country={country}
        humidity={humidity}
        pressure={pressure}
        sunrise={sunrise}
        sunset={sunset}
        error={error}
      />
    );
  }
}
