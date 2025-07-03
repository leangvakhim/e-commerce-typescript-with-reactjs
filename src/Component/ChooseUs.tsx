// import React from 'react'
import Truck from '../asset/images/truck.svg';
import Bag from '../asset/images/bag.svg';
import Support from '../asset/images/support.svg';
import Return from '../asset/images/return.svg';
import Choose from '../asset/images/why-choose-us-img.jpg';

const HomeChooseSection = () => {
    const features = [
        {
          icon: Truck,
          title: "Fast & Free Shipping",
          description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        },
        {
          icon: Bag,
          title: "Easy to Shop",
          description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        },
        {
          icon: Support,
          title: "24/7 Support",
          description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        },
        {
          icon: Return,
          title: "Hassle Free Returns",
          description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
        }
      ];
    return (
        <div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
                            {features.map((feature, index) => (
                              <div className="col-6 col-md-6" key={index}>
                                <div className="feature">
                                  <div className="icon">
                                    <img src={feature.icon} alt="Image" className="imf-fluid"/>
                                  </div>
                                  <h3>{feature.title}</h3>
                                  <p>{feature.description}</p>
                                </div>
                              </div>
                            ))}
                        </div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src={Choose} alt="Image" className="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
    )
}

export default HomeChooseSection