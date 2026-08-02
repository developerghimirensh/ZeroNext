import Card from "../components/Card";

type Post = {
    id: number;
    title: string;
    body: string;
}

const page = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts: Post[] = await res.json();
    return (

        <main>
            <h1>Feed</h1>
            {posts.map((post) => (
                <div key={post.id} style={{ marginBottom: "12px" }}>
                    <Card  title={post.title} description={post.body} />
                </div>
            ))}
        </main>
    );
};


export default page;