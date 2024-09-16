
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1, // Virtual Users
  duration: '10s', // Duration of the test
};

export default function () {
  // Send an HTTP GET request to the website
  let response = http.get('https://testkube.io'); // Replace with your website URL

  // Check if the response time is less than 1000 milliseconds
 check(response, {
    'response time is less than 1000 milliseconds': (r) => r.timings.duration < 1000, // Check if response time is less than 1000 milliseconds
  });

  // Add a sleep period (in this case, 1 second) between requests
  sleep(1);
}
