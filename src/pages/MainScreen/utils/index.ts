import { posts } from '../../../actions/service/Posts';
export const onDelete = (id: number) => {
  posts.remove(id).catch(error => {
    console.log(error);
  });
};
