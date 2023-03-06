import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBarInput } from "./styles";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchBarInput
          type="text"
          placeholder="Search Movie"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default SearchBar;
