const Title = (props: any) => {
  return (
    <div className="TitleWrapper">
      <h1 className="Title">{props.text}</h1>
      <h3 className="CurrentDate">
        <span>Today:</span>
        &nbsp;
        <small>{props.day}</small>
      </h3>
    </div>
  );
};

export default Title;
