export interface Bookmark {
  id: number;
  title: string;
  url: string;
  folder_id: number;
}

export interface Folder {
  id: number;
  title: string;
  folders: [];
  bookmarks: Bookmark;
};
