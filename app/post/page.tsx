import Card from "../components/Card";
import posts from "@/lib/posts";
type Props = {}

const page = (props: Props) => {
  return (
    <div>

        {posts.map((post)=>(<Card key={post.id} title={post.title} description={post.description}/>))}
    </div>
  )
};

export default page;