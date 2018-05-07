import axios from 'axios';

export async function* pages() {
  let page = 1;
  do {
    const params = new URLSearchParams();
    params.set('page', page);
    const { data } = await axios.get('/api/v2/people.json', { params });
    yield data;
    page = data.metadata.paging.next_page;
  } while (page);
}

export async function* people() {
  for await (const page of pages()) {
    for (const person of page.data) {
      yield person;
    }
  }
}
