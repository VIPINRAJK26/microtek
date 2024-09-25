import React from "react";
import "./Awards.css"; // Optional for custom styling

const awardsData = [
  {
    id: 1,
    image:
      "https://5.imimg.com/data5/OY/WO/MY-2/award-trophies-jpg-500x500.jpg",
    title: "Best Stall (Domestic Category)",
    year: "2024",
  },
  {
    id: 2,
    image: "https://5.imimg.com/data5/XT/NK/MY-40084965/award-trophies.jpg",
    title: "Token of Appreciation",
    year: "2023",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/7005047/pexels-photo-7005047.jpeg?cs=srgb&dl=pexels-rdne-7005047.jpg&fm=jpg",
    title: "Krishi Darshan Expo",
    year: "2023",
  },
  {
    id: 4,
    image:
      "https://www.gitanjaliawards.com/assets/upload_files/categoryimages/thumb/Graphic1.jpg",
    title: "MachAuto Expo",
    year: "2023",
  },
  {
    id: 5,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/5/305957519/GW/PU/WU/77263243/the-best-performence-of-the-year-award-500x500.jpg",
    title: "Best UPS Consumer Brand",
    year: "2023",
  },
];

const Awards = () => {
  return (
    <div className="awards container py-5 my-5">
      <h2 className="text-center mb-4">Awards and Accolades</h2>
      <p className="text-center  w-75  mb-5">
        Here’s our wall of achievements, a testament to the dedication that
        defines our brand, surpassing expectations and setting new benchmarks in
        the industry.
      </p>
      <div className="row justify-content-center">
        {awardsData.map((award) => (
          <div
            key={award.id}
            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4"
          >
            <div className="award-card bg-white rounded-3 text-center">
              <img
                src={award.image}
                alt={award.title}
                className="img-fluid mb-3"
              />
              <h5>
                {award.title} {award.year}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
