;
import React from "react";

const ProductPay = () => {
    return (
        <>
            <div className="osahan-cart-item rounded rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
                <div className="d-flex border-bottom osahan-cart-item-profile bg-white p-3">
                    <img alt="osahan" src="/img/starter1.jpg" className="mr-3 rounded-circle img-fluid" />
                    <div className="d-flex flex-column">
                        <h6 className="mb-1 font-weight-bold">Spice Hut Indian Restaurant</h6>
                        <p className="mb-0 small text-muted">
                            <i className="feather-map-pin"></i> 2036 2ND AVE, NEW YORK, NY 10029
                        </p>
                    </div>
                </div>
                <div className="bg-white border-bottom py-2">
                    <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                        <div className="media align-items-center">
                            <div className="mr-2 text-danger">&middot;</div>
                            <div className="media-body">
                                <p className="m-0">Chicken Tikka Sub</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="count-number float-right">
                                <button type="button" className="btn-sm left dec btn btn-outline-secondary">
                                    {" "}
                                    <i className="feather-minus"></i>{" "}
                                </button>
                                <input className="count-number-input" type="text" readOnly="" value="2" />
                                <button type="button" className="btn-sm right inc btn btn-outline-secondary">
                                    {" "}
                                    <i className="feather-plus"></i>{" "}
                                </button>
                            </span>
                            <p className="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                        </div>
                    </div>
                    <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                        <div className="media align-items-center">
                            <div className="mr-2 text-danger">&middot;</div>
                            <div className="media-body">
                                <p className="m-0">Methi Chicken Dry</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="count-number float-right">
                                <button type="button" className="btn-sm left dec btn btn-outline-secondary">
                                    {" "}
                                    <i className="feather-minus"></i>{" "}
                                </button>
                                <input className="count-number-input" type="text" readOnly="" value="2" />
                                <button type="button" className="btn-sm right inc btn btn-outline-secondary">
                                    {" "}
                                    <i className="feather-plus"></i>{" "}
                                </button>
                            </span>
                            <p className="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                        </div>
                    </div>
                    <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                        <div className="media align-items-center">
                            <div className="mr-2 text-danger">&middot;</div>
                            <div className="media-body">
                                <p className="m-0">Reshmi Kebab</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="count-number float-right">
                                <button type="button" className="btn-sm left dec btn btn-outline-secondary">
                                    {" "}
                                    <i className="feather-minus"></i>{" "}
                                </button>
                                <input className="count-number-input" type="text" readOnly="" value="2" />
                                <button type="button" className="btn-sm right inc btn btn-outline-secondary">
                                    {" "}
                                    <i className="feather-plus"></i>{" "}
                                </button>
                            </span>
                            <p className="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                        </div>
                    </div>
                    <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                        <div className="media align-items-center">
                            <div className="mr-2 text-success">&middot;</div>
                            <div className="media-body">
                                <p className="m-0">Lemon Cheese Dry</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="count-number float-right">
                                <button type="button" className="btn-sm left dec btn btn-outline-secondary">
                                    {" "}
                                    <i className="feather-minus"></i>{" "}
                                </button>
                                <input className="count-number-input" type="text" readOnly="" value="2" />
                                <button type="button" className="btn-sm right inc btn btn-outline-secondary">
                                    {" "}
                                    <i className="feather-plus"></i>{" "}
                                </button>
                            </span>
                            <p className="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                        </div>
                    </div>
                    <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2">
                        <div className="media align-items-center">
                            <div className="mr-2 text-success">&middot;</div>
                            <div className="media-body">
                                <p className="m-0">Rara Paneer</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="count-number float-right">
                                <button type="button" className="btn-sm left dec btn btn-outline-secondary">
                                    {" "}
                                    <i className="feather-minus"></i>{" "}
                                </button>
                                <input className="count-number-input" type="text" readOnly="" value="2" />
                                <button type="button" className="btn-sm right inc btn btn-outline-secondary">
                                    {" "}
                                    <i className="feather-plus"></i>{" "}
                                </button>
                            </span>
                            <p className="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 py-3 border-bottom clearfix">
                    <div className="input-group-sm mb-2 input-group">
                        <input placeholder="Enter promo code" type="text" className="form-control" />
                        <div className="input-group-append">
                            <button type="button" className="btn btn-primary">
                                <i className="feather-percent"></i> APPLY
                            </button>
                        </div>
                    </div>
                    <div className="mb-0 input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="feather-message-square"></i>
                            </span>
                        </div>
                        <textarea placeholder="Any suggestions? We will pass it on..." aria-label="With textarea" className="form-control"></textarea>
                    </div>
                </div>
                <div className="bg-white p-3 clearfix border-bottom">
                    <p className="mb-1">
                        Item Total <span className="float-right text-dark">$3140</span>
                    </p>
                    <p className="mb-1">
                        Restaurant Charges <span className="float-right text-dark">$62.8</span>
                    </p>
                    <p className="mb-1">
                        Delivery Fee
                        <span className="text-info ml-1">
                            <i className="feather-info"></i>
                        </span>
                        <span className="float-right text-dark">$10</span>
                    </p>
                    <p className="mb-1 text-success">
                        Total Discount
                        <span className="float-right text-success">$1884</span>
                    </p>
                    <hr />
                    <h6 className="font-weight-bold mb-0">
                        TO PAY <span className="float-right">$1329</span>
                    </h6>
                </div>
                <div className="p-3">
                    <a className="btn btn-success btn-block btn-lg" href="successful.html">
                        PAY $1329<i className="feather-arrow-right"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProductPay;
