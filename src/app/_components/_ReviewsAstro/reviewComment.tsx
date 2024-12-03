import ReviewRating from './reviewRating';

interface Props {
  review: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }
}

export default function ReviewComment({
  review
}: Props) {

  return (
    <>
      <div className="d-block my-5">
        <ReviewRating rating={review.rating}/>
        <p className="text-sm mt-4">{review.comment}</p>
        <div className="d-flex align-items-center">
          <a href="#" className="avatar avatar-lg rounded-circle min-width-50 min-height-50">
            <img alt="Image placeholder" src={review.avatar} />
          </a>
          <div className="ms-3">
            <h6 className="mb-0">{review.name}</h6>
            <p className="text-sm mb-2">{review.date}</p>
          </div>
        </div>

      </div>
      <hr className="dark horizontal" />
    </>
  );
};