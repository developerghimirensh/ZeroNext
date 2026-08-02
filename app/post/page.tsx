import Card from "@/app/components/Card";
import posts from "@/lib/posts";
import Link from "next/link";

type Props = {
    id: number;
    title: string;
    description: string;
}

const page = (props: Props) => {
    return (
        <div>

            {posts.map((post) => (
                <Link key={post.id} href={`/post/${post.id}`}>
                    <Card title={post.title} description={post.description} />
                </Link>
            ))}
        </div>
    )
};

export default page;