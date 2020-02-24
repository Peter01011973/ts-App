import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/storeConfig';

interface Props {
}

const Post: React.FC<Props> = () => {
    
    const user = useSelector<RootState>((state: RootState) => state.auth.email);
    
    return (
        <div>
            Post {user}
        </div>
    )
}

export default Post
