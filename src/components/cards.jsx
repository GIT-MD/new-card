import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiActionCreator, deleteCardAction, deleteCardsAll } from "../Redux/actions/action";
import "../index.css";

export const Cards = () => {
  const store = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  console.log(store);

  const fetchData = async () => {
    const post_req = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const post_data = await post_req
      .json()
      .then((res) => dispatch(apiActionCreator(res)));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function removeCards(e) {
    let id = e.target.getAttribute("id");
    dispatch(deleteCardAction(id));
  }
  return (
    <div className="page__container">
      <div className="page__container__buttons">
        <button className="page__container_remove" onClick={()=> dispatch(deleteCardsAll())}>Remove All</button>
        <button className="page__container_fetching">Fetching data</button>
      </div>
      <div className="apiCards">
        {store.map((obj) => (
          <div className="card" key={Math.random()} id={obj.id}>
            <button
              className="removeCards"
              id={obj.id}
              onClick={(e) => removeCards(e)}
            >
              X
            </button>
            <div className="card__container">
              <h1 className="card__text">{obj.id}</h1>
              <div className="card__title">{obj.title}</div>
              <div className="card__body">{obj.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
