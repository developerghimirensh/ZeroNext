"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

type Post = {
  id: number;
  title: string;
  body: string;
};

const CardList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "12px" }}>
          <Card title={post.title} description={post.body} />
        </div>
      ))}
    </div>
  );
};

export default CardList;