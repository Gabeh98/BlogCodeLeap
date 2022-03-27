export interface AuthI {
  name: string;
  logged: boolean;
}

export interface LayoutI{
  deleteModal?: boolean,
  editModal?: boolean,
  id?: number;
  refresh?:boolean;
}

export interface PostI{
  id?:number;
  title:string;
  content:string;
}