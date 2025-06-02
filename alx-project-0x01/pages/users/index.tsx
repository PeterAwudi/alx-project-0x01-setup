import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts?.map((user: UserProps, key: number) => (
            <UserCard key={key} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}

export default Users;