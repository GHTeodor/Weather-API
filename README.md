# WeatherApp

## Sources:
-	API - https://www.visualcrossing.com/weather-api It is free weather API that provides weather forecast per city; 
- 	Free Icons/Graphics - https://www.flaticon.com/ Website which stores huge amount of free graphic content; 
- 	Free fonts - https://fonts.google.com/ Google fonts website where you can find different font families.

## Stories:
- As a User I want to enter a city name, click search button and see city weather forecast info: 
    -   City name, 
    -	City resolved address if it`s available (full address which is available in response), 
    - 	Current date, o	Temperature, o	Weather conditions (sunny/rain/cloudy/etc), 
    - 	Feels like temperature, 
    - 	Sunrise time, 
    - 	Sunset time, 
    - 	Humidity, 
    - 	Visibility,
    - 	Pressure, 
    - 	Current day phase (day/night), 
    - 	Current week day;
-	As a User who entered nothing and clicked Search button, I want to see notification message which shows that some text should be entered; 
-	As a User who is searching weather for some city and some error occurred (no connection to API or no forecast for entered city found), I want to see notification message which shows that something went wrong.

## Implementation requirements:
-	Avoid page refreshing, should be single page application (with no redirects); 
-	Use VisualCrossing API to fetch weather forecast; 
-   Divide application code into separate files. You should separately have JS, CSS and HTML files; 
- 	Logical separation of code into separate functions; 
- 	Work with Date without external libraries;

## Good to use:
-	CSS Pseudo-classes; 
-	Work with objects;
-   Usage of ES6 features; 
- 	Usage of external fonts; 
- 	Usage of assets; 
- 	Different condition constructions;