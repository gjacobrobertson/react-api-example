import axios from 'axios';

export default async function*() {
  let page = 1;
  do {
    const params = new URLSearchParams();
    params.set('page', page);
    const response = await axios.get('/api/v2/people.json', { params });
    for (const person of response.data.data) {
      yield person;
    }
    page = response.data.metadata.paging.next_page;
  } while (page);
}
