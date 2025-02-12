import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '10s', target: 20  },
  ],
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/users');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}