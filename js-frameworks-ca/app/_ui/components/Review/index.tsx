type review = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

const Review = ({ username, rating, description }: review) => {
  return (
    <div className={"shadow text-neutral-900 flex flex-col gap-2"}>
      <div className={"flex justify-between"}>
        <h3 className={"text-neutral-700 font-bold"}>{username}</h3>
        <span className={"font-bold"}>
          {" "}
          <span className={"font-normal"}>{rating}</span>/5
        </span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export { Review };
