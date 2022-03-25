import { OwnProps } from './types';
import {Wrapper} from './styles'
export default function Form(props:OwnProps){
    const { children } = props;
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}