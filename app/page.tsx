import Link from "next/link";
import Card from "./components/Card";
import CardList from "./components/CardList";

type Props = {}

const page = (props: Props) => {
  const home = [
    { "id": 1, 'link': "counter", },
    { "id": 2, 'link': "post", },
    { "id": 3, 'link': "feed", },
  ]
  return (
    <div >
      {home.map((list) => (
        <Link key={list.id} href={`/${list.link}`}>
          <Card title={list.link} description="Description for the card" />
        </Link>
      ))}
      <CardList />
    </div>
  )
};

export default page;