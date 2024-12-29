const OneQuery = ({ partBfore, boldedText, partAfter, query, setQuery }) => {
  const handleClick = () => {
    setQuery(`${partBfore}${boldedText}${partAfter}`);
  };

  return (
    <tr onClick={handleClick}>
      <td>
        {partBfore}
        <span>{boldedText}</span>
        {partAfter}
      </td>
    </tr>
  );
};

export default OneQuery;
