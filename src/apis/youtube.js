import axios from 'axios';

const KEY = 'AIzaSyAqzfTvrp9Y7UQ5K6hSeF26VE5ygrwkNQM';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});