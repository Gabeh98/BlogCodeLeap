export interface PostI {
  id?: number;
  username: string;
  created_datetime?: string;
  title: string;
  content: string;
}

export interface PatchI{
  content: string;
  title:string;
}
