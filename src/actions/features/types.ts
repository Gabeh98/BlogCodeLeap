export interface AuthI {
  name: string;
  logged: boolean;
}

export interface LayoutI{
  deleteModal: boolean,
  editModal: boolean,
}

export interface PostI{
  id?:number;
  title:string;
  content:string;
}