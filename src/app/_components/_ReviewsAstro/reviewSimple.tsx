import ReviewComment from './reviewComment';

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }[]
}

export default function ReviewSimple({
  reviews
}: Props) {

  let CommentsList = [];

  reviews.map(review => {  

    CommentsList.push(
      <ReviewComment review={review} /> 
    )
  });
  return (
    <>
      <div className="mx-auto text-center w-md-60 mb-5">
        <h3>Our Customer’s Opinion</h3>
        <p>Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. </p>
      </div>
      <div className="w-100 w-md-80 w-lg-60 mx-auto">
        {CommentsList}
      </div>
    </>
    
  );
};