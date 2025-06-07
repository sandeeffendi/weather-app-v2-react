
# Weather App v2 Built With React

Welcome to **Weather App v2**, the second version of my weather application, now rebuilt using **React** and **Tailwind CSS** for a modern, scalable, and responsive user experience. This new version improves upon the previous one that was built with vanilla JavaScript, HTML, and CSS.

> 🔗 **Live Demo:** (https://weather-app-v2-react.vercel.app/)

---

## Overview

Weather App v2 provides current weather details plus a **3-hour interval hourly forecast** for the day, offering a more comprehensive weather insight.

Features include:

- Current weather conditions by city  
- Hourly forecast every 3 hours for the entire day  
- Responsive design using Tailwind CSS  
- Unit testing with Bun  

All weather data is still powered by the familiar [OpenWeatherMap API](https://openweathermap.org/api), the same API used in the previous version.

---

## New Features Compared to v1

| Feature                  | v1 (Vanilla JS)                 | v2 (React + Tailwind)               |
|--------------------------|--------------------------------|-----------------------------------|
| Framework                | None (Vanilla JS)              | React                            |
| Styling                  | CSS vanilla                   | Tailwind CSS                    |
| Hourly Forecast          | No                           | Yes (per 3 hours, full day)     |
| Testing                  | Unit tests with Bun           | Unit tests with Bun              |
| Component-based UI       | No                           | Yes                             |
| Performance & Scalability| Basic                        | Improved with React's virtual DOM|

---

## Technologies Used

- **React.js** – UI framework for building components  
- **Tailwind CSS** – Utility-first CSS framework for styling  
- **Bun** – JavaScript runtime and test runner for fast testing  
- **OpenWeatherMap API** – Weather data source  

---

## Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/sandeeffendi/weather-app-v2-react.git
cd weather-app-v2-react
```

2. Install dependencies

```bash
bun install
```

3. Start the development server

```bash
bun dev
```

4. Open your browser at `http://localhost:3000`

---

## Running Tests

Run unit tests with Bun:

```bash
bun test
```

Tests cover:

* API fetching & error handling
* Correct rendering of current weather
* Displaying hourly forecast data
* Component unit tests

---

## API Reference

* [OpenWeatherMap Current Weather API](https://openweathermap.org/current)
* [OpenWeatherMap 3-hour Forecast API](https://openweathermap.org/forecast5)

---

## How to Use

1. Enter a city name in the search bar
2. View the current weather information
3. Scroll to see the hourly forecast broken down every 3 hours for the current day

---

## Contributing

Feel free to fork the repository and submit pull requests. Suggestions and bug reports are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## Acknowledgements

Thanks to OpenWeatherMap for providing the free weather API, and to all the open-source communities behind React, Tailwind CSS, and Bun.

---

## Previous Version Info

For reference, here is a brief overview of the previous version of this app:

**Realtime Weather App** - built with vanilla JS, HTML, and CSS. It featured basic current weather data fetching and display, with no hourly forecast.

[View the previous github repository](https://github.com/sandeeffendi/weather-app-js)

[View the previous version live demo](https://weather-app-js-seven.vercel.app/)

---
