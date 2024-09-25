import React from "react";
import "./Corporate.css"; 

const csrData = [
  {
    id: 1,
    image:
      "https://bodhitreefoundation.org.in/wp-content/uploads/2019/03/Make-a-Donation-Charity-Donate-140880731.jpg", // Replace with your image path
    title: "Donation to IAMD",
    description:
      "Our CMD, Shri Subodh Gupta donated to the Indian Association of Muscular Dystrophy",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D", // Replace with your image path
    title: "Clean India Mission",
    description:
      "Clean Nalagarh-Green Nalagarh initiatives by our CMD, Shri. Subodh Gupta",
  },
];

const CSR = () => {
  return (
    <div className="corporate container py-5">
      <h2 className="text-center mb-4">Corporate Social Responsibility</h2>
      <p className="text-center mb-5">
        Our CSR initiatives are stories of transformation directed towards the
        upliftment of Society following the highest levels of integrity,
        innovation, and excellence.
      </p>
      <div className="row justify-content-center">
        {csrData.map((csr) => (
          <div
            key={csr.id}
            className="col-12 col-md-6 d-flex justify-content-center mb-4"
          >
            <div className="csr-card">
              <div className="image-container">
                <img src={csr.image} alt={csr.title} className="img-fluid" />
              </div>
              <h5 className="mt-3">{csr.title}</h5>
              <p>{csr.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSR;
