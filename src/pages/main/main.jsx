import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";

export const Main = () => {
  const [postList, setPostList] = useState(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      {postList?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
