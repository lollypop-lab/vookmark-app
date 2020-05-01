export interface Bookmark {
  id: number;
  title: string;
  url: string;
  folder_id: number;
  own_folder?: boolean;
  created_at?: string;
  updated_at?: string;
  favorite?: boolean;
}
