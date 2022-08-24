import React from "react";
function CourseMember(props) {
  return (
    <article>
      <a href="#">
        <img src={props.img} alt={props.title} />
        <h4>{props.title}</h4>
        <p>{props.instructor}</p>
        <div className="rate">
          <p>
            {props.stars}
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span className="num">({props.students})</span>
          </p>
        </div>
        <h5>{props.price}</h5>
        <div
          className="best"
          style={{ display: props.bestSeller ? "content" : "none" }}
        >
          <p>Best Seller</p>
        </div>
      </a>
    </article>
  );
}

export default CourseMember;
