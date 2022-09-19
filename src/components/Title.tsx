const date: Date = new Date();

const formatDate = (date: Date) => {
  return date.toDateString();
}

const Title = (props: { text: string }) => {
  return (
    <div className="TitleWrapper">
      <h1 className="Title">{props.text}</h1>
      <h3 className="CurrentDate">
        <span>Today</span>
        &nbsp;
        <small>{formatDate(date)}</small>
      </h3>
    </div>
  )
}

export default Title;
