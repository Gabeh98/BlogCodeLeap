import { OwnProps } from './types';
import { Wrapper, Header, Content, UserInfo, ActionsButtons } from './styles';
import moment from 'moment';
import Text from '../Text';
import EditIcon from '../Icons/EditIcon';
import DeleteIcon from '../Icons/DeleteIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

export default function PostCard(props: OwnProps) {
  const { title, content, username, created_datetime, onDelete, onEdit } = props;
  const loggedUser = useSelector((state: RootState) => state.auth.name);
  return (
    <Wrapper>
      <Header>
        <Text bold fontsize={22} color={'default'}>
          {title}
        </Text>
        <ActionsButtons>
          {loggedUser === username ? (
            <>
              <EditIcon onClick={onEdit} />
              <DeleteIcon onClick={onDelete} />
            </>
          ) : null}
        </ActionsButtons>
      </Header>
      <UserInfo>
        <Text color={'secondary'}>@{username}</Text>
        <Text color={'secondary'}>{moment(created_datetime).fromNow()}</Text>
      </UserInfo>
      <Content>
        <Text color={'primary'}>{content}</Text>
      </Content>
    </Wrapper>
  );
}
