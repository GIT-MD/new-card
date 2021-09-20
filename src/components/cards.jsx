import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiActionCreator } from "../Redux/actions/action";
import "../index.css";

export const Cards = () => {
  const store = useSelector((state) => state.posts);
  console.log(store);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const post_req = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const post_data = await post_req
      .json()
      .then((res) => res.forEach((val) => dispatch(apiActionCreator(val))));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="apiCards">
      {store.map((obj) => (
        <div className="cards">
          <div className="cards__container">
            <h1 className="text">{obj.id}</h1>
            <div className="cards__title">{obj.title}</div>
            <div className="cards__body">{obj.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
