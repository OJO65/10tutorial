const Square = ({ colorValue, hexValue }) => {
  return (
    <section 
    className="square"
    style={{backgroundColor: colorValue}}
    >
        <p>{colorValue ? colorValue : "empty value"}</p>
        <p>{hexValue ? hexValue : null}</p>
    </section >
  );
}

Square.defaultProps = {
    colorValue: "empty color value"
}

export default Square;
