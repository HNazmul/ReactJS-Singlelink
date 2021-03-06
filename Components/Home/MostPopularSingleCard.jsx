;

function MostPopularSingleCard() {
    return (
        <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-img">
                    <div className="star position-absolute">
                        <span className="badge badge-success">
                            <i className="feather-star"></i> 3.1 (300+)
                        </span>
                    </div>
                    <div className="favourite-heart text-danger position-absolute">
                        <a href="#">
                            <i className="feather-heart"></i>
                        </a>
                    </div>
                    <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                    </div>
                    <a href="restaurant.html">
                        <img alt="#" src="img/popular4.png" className="img-fluid item-img w-100" />
                    </a>
                </div>
                <div className="p-3 position-relative">
                    <div className="list-card-body">
                        <h6 className="mb-1">
                            <a href="restaurant.html" className="text-black">
                                Bite Me Now Sandwiches
                            </a>
                        </h6>
                        <p className="text-gray mb-1 small">American • Pure veg</p>
                        <p className="text-gray mb-1 rating"></p>
                        <ul className="rating-stars list-unstyled">
                            <li>
                                <i className="feather-star star_active"></i>
                                <i className="feather-star star_active"></i>
                                <i className="feather-star star_active"></i>
                                <i className="feather-star star_active"></i>
                                <i className="feather-star"></i>
                            </li>
                        </ul>
                        <p></p>
                    </div>
                    <div className="list-card-badge">
                        <span className="badge badge-success">OFFER</span>
                        <small>65% off</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MostPopularSingleCard;
