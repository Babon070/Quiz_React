import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import instance from "../../api/instance";
import UseFetchData from "../../hooks/useFetchData";
import { useDispatch } from "react-redux";
import "./Home.scss";

const Home = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [amount, setAmount] = useState("");
  const [value, setValue] = useState("");

  const data = UseFetchData("/api_category.php");
  const cetgoryData = data[0].trivia_categories;

  const moreResult = (e) => {
    setAmount(e.target.value);
  };

  const giveMoreForm = (e) => {
    e.preventDefault();
    instance
      .get(`/api.php?amount=${amount}&category=${value}`)
      .then((response) => {
        if (response.data.results) {
          dispatch({ amount: response.data.results, type: "AMOUNT" });
        }
      });
    history.push(`/quiz/${value}`);
  };

  return (
    <section className="home">
      <div className="home__wrapper">
        <form className="form__wrapper" onSubmit={giveMoreForm}>
          <span>Categories!</span>
          <select
            onChange={(e) => setValue(e.target.value)}
            className="home__select"
          >
            {cetgoryData?.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <label className="label" htmlFor="amount">
            Amount questions!
          </label>
          <input
            type="number"
            placeholder="Amount questions..."
            onChange={moreResult}
          />
          <button type="submit">Start</button>
        </form>
      </div>
    </section>
  );
};

export default Home;
