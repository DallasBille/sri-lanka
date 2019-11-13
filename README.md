## Getting Started

## Live (takes a minute for heroku to spin up):

[Heroku Live Version](https://sri-lanka.herokuapp.com/)

## Locally

1. Clone repo.
2. cd sri-lanka.
3. npm install.
4. npm start.

## About/Tools

For this challenge I decided to use the React Mapbox GL ([React mapbox GL](https://github.com/alex3165/react-mapbox-gl)) library with urbica, which is a React library that uses WebGL for data visualization,
[Urbica](https://github.com/urbica/react-map-gl).

This is in part due to some significant research on what may best fit the requirements of the project(raster source via WMT, geojson, and .tif sources), all of which I had to learn to use with the components of the libraries. Which was extremely fun.

Other react related components I used were react-modal [React Modal](https://github.com/reactjs/react-modal), which creates a button dialog that portrays precipitation and flood data.

I have kept the project layout modular so my main App.js file isn't oversaturated with code making it unreadable.

## General:

I chose to use the Outdoors mapstyle because it shows an ideal combination of terrain, main roads, national areas, and city information. You can toggle the visibility of each layer, with them being visible on page load.

### Hospital Layer:

I noticed that the file was a .geojson file, which I converted to a .json file so I could use it in my project directory. I then dynamically render a popup based on the location (using Popup component, and FeatureState(which grabs the object of the location)). This allows me to pass data to the Popup, although the hospital name was the only useful data for now.

The great thing about using Source, Layer, and FeatureLayer Components as compared with Marker and Popup Components is how it affects the map rendering speeds. Using Marker for this much data can cause severe lag during map interaction, Ex. [Where-Fi](https://where-fi.herokuapp.com/).

### Flood Layer:

The same logic applies to the WMT data. Using Source and Layer is extremely convenient when rendering this layer and having a quick user interface. The great thing about this library is all you have to do is use a Source component propery to point to the WMT endpoint.

### Rendering the CSV Data:

So for this I converted the CSV to .json with a converter (could be done programmatically with some Python scripts). Then rendered the data as a Modal with a button click.

## Improvements:

With more data comes more possibilities to do cool things. The hospitals only had two good pieces of data which were the name of the hospital, and the coords.

1. One definite improvement would be this styling of the webpage. Much of my design is minimalist and a bit crude, and with more time that can be cleaned up and polished, and features could be added.
2. It's hard to say what improvements can be made when the extent of the data is unknown.

A high level idea that comes to mind is a combination of hospital locations, extreme flood zones (via polygon coordinates), and area population. Programs can be written based off this data to provide hospitals with an idea of what to expect in an emergency(based on population and weather behavior), and flood victims an idea of what to expect from emergency services.

## Conclusion:

As usual I have had a blast developing with mapping software. And Mapbox as a tool is pretty incredible, and there are a ton of extremely thorough libraries that can be build on top the Mapbox API.

https://www.worldbank.org/en/news/feature/2013/04/10/leveraging-technology-disaster-risk-management

A real-time traffic map was generated and made available to the public (including via Google) using data gathered from moving vehicles;
Observation data from flood sensors was distributed to car navigation systems and smartphones; and
GPS data from mobile phones was used to reproduce and analyze the flow of people at the time of the earthquake.

http://web.worldbank.org/WBSITE/EXTERNAL/TOPICS/EXTSDNET/0,,menuPK:64885113~pagePK:7278667~piPK:64911824~theSitePK:5929282~contentMDK:23285337,00.html
