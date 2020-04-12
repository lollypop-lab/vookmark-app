export const Bookmarks = {
  collections : [
    {
      id: 1, title: 'Videos',
      folders: [
        {
          id: 2, title: 'Youtube',
          folders: [
            {
              id: 2, title: 'HIP HOP Songs',
              bookmarks: []
            }
          ],
          bookmarks: [
            {id: 1, title: '50 Cents Best', url: 'http://bookmark.com', folder_id: 1},
            {id: 2, title: 'Emiway Devine', url: 'http://bookmark2.com', folder_id: 1},
          ]
        }
      ],
      bookmarks: [
        {id: 1, title: 'Summer Ball 2020', url: 'http://bookmark.com', folder_id: 1},
        {id: 2, title: 'Barcelona vs Realmadrid', url: 'http://bookmark2.com', folder_id: 1},
      ]
    },
    {
      id: 1, title: 'Tutorial',
      folders: [
        {
          id: 2, title: 'Youtube',
          bookmarks: [
            {id: 1, title: '50 Cents Best', url: 'http://bookmark.com', folder_id: 1},
            {id: 2, title: 'Emiway Devine', url: 'http://bookmark2.com', folder_id: 1},
          ]
        }
      ],
      bookmarks: [
        {id: 1, title: 'Summer Ball 2020', url: 'http://bookmark.com', folder_id: 1},
        {id: 2, title: 'Barcelona vs Realmadrid', url: 'http://bookmark2.com', folder_id: 1},
      ]
    }
  ]
};
