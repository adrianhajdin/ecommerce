
interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }[]
}

export default function ReviewProgress({
  reviews
}: Props) {

  let ratings = [0,0,0,0,0,0];
  let ratingsPercentage = [0,0,0,0,0,0];

  reviews.map(review => {  

    ratings[review.rating]++;

  });

  for(let i = 1; i < 6; i++){
    ratingsPercentage[i] = Math.trunc((ratings[i] * 100) / reviews.length);
  }
  
  return (
    <>
      <div className="progress-wrapper d-flex align-items-center">
        <div className="d-flex">
          <p className="mb-0 font-weight-bold">5</p>
          <svg className="text-warning w-rem flex-shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
          </svg>
        </div>
        <div className="progress w-100 me-3">
          <div className="progress-bar bg-warning" role="progressbar" style={{width : ratingsPercentage[5] + '%'}}></div>
        </div>
        <div className="progress-info">
          <div className="progress-percentage">
            <span className="text-sm font-weight-bold">{ratingsPercentage[5]}%</span>
          </div>
        </div>
      </div>
      <div className="progress-wrapper d-flex align-items-center">
        <div className="d-flex">
          <p className="mb-0 font-weight-bold">4</p>
          <svg className="text-warning w-rem flex-shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
          </svg>
        </div>
        <div className="progress w-100 me-3">
          <div className="progress-bar bg-warning" role="progressbar" style={{width : ratingsPercentage[4] + '%'}}></div>
        </div>
        <div className="progress-info">
          <div className="progress-percentage">
            <span className="text-sm font-weight-bold">{ratingsPercentage[4]}%</span>
          </div>
        </div>
      </div>
      <div className="progress-wrapper d-flex align-items-center">
        <div className="d-flex">
          <p className="mb-0 font-weight-bold">3</p>
          <svg className="text-warning w-rem flex-shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
          </svg>
        </div>
        <div className="progress w-100 me-3">
          <div className="progress-bar bg-warning" role="progressbar" style={{width : ratingsPercentage[3] + '%'}}></div>
        </div>
        <div className="progress-info">
          <div className="progress-percentage">
            <span className="text-sm font-weight-bold">{ratingsPercentage[3]}%</span>
          </div>
        </div>
      </div>
      <div className="progress-wrapper d-flex align-items-center">
        <div className="d-flex">
          <p className="mb-0 font-weight-bold">2</p>
          <svg className="text-warning w-rem flex-shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
          </svg>
        </div>
        <div className="progress w-100 me-3">
          <div className="progress-bar bg-warning" role="progressbar" style={{width : ratingsPercentage[2] + '%'}}></div>
        </div>
        <div className="progress-info">
          <div className="progress-percentage">
            <span className="text-sm font-weight-bold">{ratingsPercentage[2]}%</span>
          </div>
        </div>
      </div>
      <div className="progress-wrapper d-flex align-items-center">
        <div className="d-flex">
          <p className="mb-0 font-weight-bold">1</p>
          <svg className="text-warning w-rem flex-shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
          </svg>
        </div>
        <div className="progress w-100 me-3">
          <div className="progress-bar bg-warning" role="progressbar" style={{width : ratingsPercentage[1] + '%'}}></div>
        </div>
        <div className="progress-info">
          <div className="progress-percentage">
            <span className="text-sm font-weight-bold">{ratingsPercentage[1]}%</span>
          </div>
        </div>
      </div>
    </>
    
  );
};