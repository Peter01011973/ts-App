export interface PostI {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface PostsStateI {
    posts: PostI[],
    isLoading: boolean,
    error: boolean, 
    postListTotalSize: number
}