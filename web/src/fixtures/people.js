export const data = [
  {
    id: 1,
    display_name: 'Test User',
    email_address: 'test.user@example.com',
    title: 'Tester',
  },
  {
    id: 2,
    display_name: 'Unemployed',
    email_address: 'unemployed@example.com',
  },
  {
    id: 3,
    display_name: 'Duplicate',
    email_address: 'un+emp.loyed1@otherdomain.net',
  },
  {
    id: 4,
    display_name: 'No Email',
    title: 'Lamplighter',
  },
];

export const pages = 5;
export const list = ({ params }) => {
  const page = +params.get('page') || 1;
  const perPage = +params.get('per_page') || 25;
  return {
    metadata: {
      paging: {
        per_page: perPage,
        current_page: page,
        total_pages: pages,
        next_page: page < pages ? page + 1 : null,
        prev_page: page > 1 ? page - 1 : null,
      },
    },
    data,
  };
};
