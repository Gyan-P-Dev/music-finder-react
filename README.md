# MusicFinder App 🎵

MusicFinder is a web application that helps users discover artists from their city or any specified location. It fetches artist data using the [MusicBrainz API](https://musicbrainz.org/) and provides an easy-to-use interface for searching and viewing results.

---

## Features 🚀

🌐 **Search by Location**: Automatically detects the user's location or allows manual input of a city name.
🎤 **Artist Listing**: Displays a paginated list of artists from the specified location.
🔄 **Loading Indicator**: Shows a spinner while data is being fetched.
💅 **Modern UI**: Built with Material-UI for a consistent and responsive design.
📡 **API Integration**: Uses MusicBrainz API to retrieve artist information.

---

## Prerequisites 🛠️

**Node.js** (version 14 or above)
**npm** or **yarn**
An active internet connection to fetch data from APIs.

---

## Getting Started 🏁

1. **Clone the Repository**:
   https://github.com/Gyan-P-Dev/music-finder-react.git
   cd music-finder
2. **Install Dependencies**:
   npm install
   # or
   yarn install
3. **Set Up Environment Variables**:
   Create a .env file in the root of your project and add the following:
   env
   REACT_APP_API_KEY='5114dc8c10bb4a92b7e1e361871ab81a'
   REACT_APP_OPENCAGEDATA_API='https://api.opencagedata.com/geocode/v1/json'
   REACT_APP_GEO_API= 'https://get.geojs.io/v1/ip/geo.json'
   REACT_APP_MUSIC_API='https://musicbrainz.org/ws/2/artist' 4.
   **Run the Application**:
   npm start
   # or
   yarn start
   The app will be available at http://localhost:3000.

---

## Project Structure 🗂️

src/
├── components/
│ ├── ArtistTable.jsx # Displays the list of artists
│ ├── LocationInput.jsx # Input field for searching by city
│ ├── LoadingIndicator.jsx # Spinner for loading state
│ └── MusicFinderApp.jsx # Main app component
├── utiles/
│ ├── fetchArtistsUtil.js # Function to fetch artists from API
│ └── fetchCityNameUtil.js # Function to fetch city name from geolocation
├── App.js # Root application entry point
└── index.js # React app entry point

---

## Technologies Used 🛠️

**Frontend**: React, Material-UI
**API**: MusicBrainz API, Geolocation API
**State Management**: React Hooks (useState, useEffect)
**HTTP Requests**: Axios

---

## Live Demo

You can view the live demo of the project here:  
[Live Demo](https://music-finder-react.onrender.com)

## Repository

The source code for this project can be found in the GitHub repository:  
[GitHub Repository](https://github.com/Gyan-P-Dev/music-finder-react/tree/main)

---

## How It Works ⚙️

1. On app load:

   - The app attempts to get the user's geolocation.
   - If successful, it fetches the city name and searches for artists.
   - If geolocation fails, a fallback API provides a default city name.

2. Users can manually search for artists by typing a city name.

3. Artist data is displayed in a paginated table with a loading spinner during data fetch.

---

## API References 📚

**[MusicBrainz API](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2)**
**Geolocation API** (set via .env)

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch:
   git checkout -b feature-name 3. Make your changes and commit:
   git commit -m "Add new feature" 4. Push to the branch:
   git push origin feature-name 5. Create a pull request.
