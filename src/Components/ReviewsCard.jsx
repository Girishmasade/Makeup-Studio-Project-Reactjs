import { cards } from "../utils/Card";

const ReviewsCard = () => {
  return (
    <div className="bg-blue-00 border-1 flex md:flex-row md:pt-20 md:pb-20 flex-col gap-10 items-center justify-evenly mx-auto text-center p-10">
     
     {
        cards.map((idx) => (
            <div className="md:w-[25%] bg-pink-500 rounded-lg shadow-lg space-y-2 overflow-hidden pb-10" key={idx.id}>
            <img
              src={idx.image}
              alt={idx.title}
              className="md:w-3/3 flex justify-center rounded-lg"
            />
            <h1 className="text-lg font-bold">{idx.title}</h1>
            <p className="italic p-3">
              "{idx.description}"
            </p>
            <img src={idx.rating} alt="rating" className="w-2/3 md:pl-32 pl-20 text-center items-center"/>
          </div>
        ))
     }
     
    
    </div>
  );
};

export default ReviewsCard;
