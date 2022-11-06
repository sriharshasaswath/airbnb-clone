import "./index.css";

const Images = (props) => {
  const { imagesData } = props;
  const { url, para, heading, button } = imagesData;

  return (
    <div
      className="book-img"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <p className="paraa">{para}</p>
      <h1 className="heading">{heading}</h1>
      <button className="button">{button}</button>
    </div>
  );
};
export default Images;
