const Search = (props) => {
  return (
    <input
      type="text"
      onChange={(e) => props.handleInput(e)}
    />
  );
};

export default Search;
