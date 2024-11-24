import ReviewComment from './reviewComment';
import ReviewRating from './reviewRating';
import ReviewProgress from './reviewProgress';

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
    productID: number;
  }[]
}

export default function ReviewSummaryChart({
  reviews
}: Props) {

  let CommentsList = [];
  let rating = 0;  

  reviews.map(review => {  
    rating += review.rating;
    CommentsList.push(
      <ReviewComment review={review} /> 
    )
  });
  
  rating = Math.trunc(rating / reviews.length);

  return (
    <>
    <div className="mx-auto text-center w-md-60 mb-5">
      <h3>Our Customer’s Opinion</h3>
      <p>Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. </p>
    </div>
    <div className="row">
      <div className="col-12 col-lg-5">
        <div className="p-4 mb-4">
          <h4 className="mb-3">Client Reviews</h4>
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-2">4.7</h6>
            <ReviewRating rating={rating}/>
            <p className="mb-0 ms-2">Based on <b>{reviews.length}</b> reviews</p> 
          </div>
          <div className="mt-4 mb-5">
            <ReviewProgress reviews={reviews}/>
          </div>
          <h5>We value your opinion</h5>
          <p className="mb-5">The time is now for it to be okay to be great. People in this world shun people for being great. </p>
          <button className="btn btn-dark w-100 mb-0">Write a review</button>
        </div>
      </div>
      <div className="col-12 col-lg-7 max-height-500 overflow-scroll rounded-3 pt-4">
        <div className="card card-plain">
          <div className="card-body">
            {CommentsList}
          </div>
        </div>
      </div>
    </div>

    </>
    
  );
};