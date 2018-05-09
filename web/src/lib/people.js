import axios from 'axios';

export const projection = person => ({
  id: person.id,
  name: person.display_name,
  email: person.email_address,
  title: person.title,
});

export async function* iteratePages() {
  let page = 1;
  do {
    const params = new URLSearchParams();
    params.set('page', page);
    const { data } = await axios.get('/api/v2/people.json', { params });
    yield data;
    page = data.metadata.paging.next_page;
  } while (page);
}

export async function* iteratePeople() {
  for await (const page of iteratePages()) {
    for (const person of page.data) {
      yield person;
    }
  }
}
