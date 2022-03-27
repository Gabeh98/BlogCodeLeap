export interface PostI {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export interface ModalData {
  type: 'edit' | 'delete';
  id?: number;
  content:string;
  title:string;
}
