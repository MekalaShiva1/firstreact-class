import "./Recipes.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [showDetails, setShowDetails] = useState({});
  const [page, setPage] = useState(1);
  const recipeperpage = 4;

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const Response = await axios.get("https://dummyjson.com/recipes");
    setRecipes(Response.data.recipes);
    console.log(Response);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const filterrecipeData = recipes.filter((filteredrecipe) =>
    filteredrecipe.name.toLowerCase().includes(search.toLowerCase())
  );

  const pagination = filterrecipeData.slice(
    (page - 1) * recipeperpage,
    page * recipeperpage
  );

  const toggleDetails = (id) => {
    setShowDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const display = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(filterrecipeData.length / recipeperpage)
    )
      setPage(pageNumber);
  };

  return (
    <div>
      <div className="enter_recipes">
        <input
          onChange={searchHandler}
          type="text"
          placeholder="Search Recipe Here "
        />
        <div className="recipe_list">
          {pagination.map((each) => {
            return (
              <div key={each.id} className="recipe_card">
                <img
                  src={each.image}
                  alt={each.name}
                  className="recipe_image"
                  height={100}
                  width={200}
                />
                <div className="recipe_info">
                  <h3>{each.name}</h3>
                  <p>{each.cuisine}</p>
                  <button onClick={() => toggleDetails(each.id)}>
                    {showDetails[each.id] ? "see less" : "see more"}
                  </button>
                  {showDetails[each.id] && (
                    <div className="recipe_details">
                      <h4>Ingredients</h4>
                      <ul>
                        {each.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                      <h4>Instructions</h4>
                      <ul>
                        {each.instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="pagination">
          <span
            onClick={() => display(page - 1)}
            className={`pagecontrol ${page === 1 ? "disabled" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              height={24}
              width={24}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
          {[...Array(Math.ceil(filterrecipeData.length / recipeperpage))].map(
            (_, i) => (
              <span
                onClick={() => display(i + 1)}
                key={i}
                className={`pagenumber ${page === i + 1 ? "active" : ""}`}
              >
                {i + 1}
              </span>
            )
          )}
          <span
            onClick={() => display(page + 1)}
            className={`pagenumber ${
              page === Math.ceil(filterrecipeData.length / recipeperpage)
                ? "disabled"
                : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              height={24}
              width={24}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
