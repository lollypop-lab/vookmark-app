export interface Folder {
  id: number;
  title: string;
  description?: string;
  folder_id: any;
  own_folder?: boolean;
  folder_count?: number;
  bookmark_count?: number;
  created_at?: string;
  updated_at?: string;
  public?: boolean;
  favorite?: boolean;
}
