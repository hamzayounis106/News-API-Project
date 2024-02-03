# React News App

This React News App retrieves the latest news articles using the NewsAPI. Due to limitations in the free version of the NewsAPI, the live fetching of data may not work when deployed to production or GitHub Pages. As an alternative, the project includes a static JSON file named `NewsApi.json` that simulates the structure of the API response. This static file is used to display news articles when deploying the app to GitHub Pages.

## Components

### 1. App.js

The `App.js` component is responsible for fetching news articles from the NewsAPI when run in a local development environment. The API key is required for live fetching and can be replaced in the API endpoint within the component.

### 2. News.js

The `News.js` component is designed to display news articles. It retrieves data either from the live NewsAPI or the static JSON file, depending on the environment. This ensures seamless functionality both during development and when the app is deployed to GitHub Pages.
