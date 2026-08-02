type Props = {
    params: Promise<{
        id: string;
    }>;
};

const Post = async ({ params }: Props) => {
    const { id } = await params;

    return (
        <main>
            <h1> Post #{id}</h1>
            <p>This is post number {id}.</p>
        </main>
    );
};

export default Post;