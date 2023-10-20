import search_icon from "../assets/search.png";

const Search = ({ onSearch }) => {
  return (
    <div className="top-bar">
      <input type="text" className="cityInput" placeholder="Search" />
      <div className="search-icon" onClick={() => onSearch()}>
        <img src={search_icon} alt="" />
      </div>
    </div>
  );
};

export default Search;
