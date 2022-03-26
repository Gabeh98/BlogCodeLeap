import { OwnProps } from "./types";
import { Wrapper, Header, Content, UserInfo } from './styles';
import moment from 'moment';
import Text from '../Text';

export default function PostCard(props:OwnProps){
    const {title, content, username, created_datetime} = props;
    return (
        <Wrapper>
            <Header><Text bold  fontsize={22} color={"default"}>{title}</Text></Header>
            <UserInfo><Text color={"secondary"}>@{username}</Text><Text color={"secondary"}>{moment(created_datetime).fromNow()}</Text></UserInfo>
            <Content><Text color={"primary"}>{content}</Text></Content>
        </Wrapper>
    );
}