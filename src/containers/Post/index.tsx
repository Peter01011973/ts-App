import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/storeConfig';

interface Props {
    
}

const Post: React.FC<Props> = () => {
    const user = useSelector<RootState>((state: RootState) => state.auth.email);
    console.log('user', user);
    
    return (
        <div>
            Post {user}
        </div>
    )
}

export default Post
