import React from "react";

const Banner = () => {
  const bannerPoints = [
    {
      imgLink:
        "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-020.png",
      paragraph: "Lorem ipsum dolor sit amet consectetur.",
      heading: "Intensive Learning",
    },
    {
      imgLink:
        "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-020.png",
      paragraph: "Lorem ipsum dolor sit amet consectetur.",
      heading: "Growth Mindset",
    },
    {
      imgLink:
        "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-020.png",
      paragraph: "Lorem ipsum dolor sit amet consectetur.",
      heading: "Relevant Skill",
    },
    {
      imgLink:
        "https://skillup.1onestrong.com/wp-content/uploads/2023/12/Asset-020.png",
      paragraph: "Lorem ipsum dolor sit amet consectetur.",
      heading: "Placement Opportunity",
    },
  ];
  return (
    <section>
      <div className="mx-auto px-[23px] py-[50px] lg:px-3 xl:p-[100px] font-poppins grid lg:grid-cols-2 mt-[50px] bg-gray-50 ">
        <div className="lg:px-[50px]">
          <div className="rounded-2xl shadow-sm overflow-hidden">
            <img
              className="h-60%"
              src="https://skillup.1onestrong.com/wp-content/uploads/2023/12/upskilljpg-013.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="px-[13px]">
          <h2 className="text-2xl md:text-3xl sm:text-center  font-semibold my-7 lg:my-0">
            Why UpSkill becomes the best training course & bootcamp.
          </h2>

          <div className="lg:py-10">
            <ul className="grid md:grid-cols-2">
              {bannerPoints.map((points, index) => {
                return (
                  <li key={index} className="flex content-center md:px-1 py-4">
                    <img className="h-10 pr-3" src={points.imgLink} alt="" />
                    <div>
                      <h4 className="text-nowrap font-semibold">
                        {points.heading}
                      </h4>
                      <p className="text-sm tracking-wide">
                        {points.paragraph}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <CompanyLogo />
    </section>
  );
};

export default Banner;

const CompanyLogo = () => {
  const imgLink = [
    {
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/logo-preview-2-1.png",
    },
    {
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/logo-preview-10-1.png",
    },
    {
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/logo-preview-3-1.png",
    },
    {
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/logo-preview-6-1.png",
    },
    {
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/logo-preview-4-1.png",
    },
    {
      link: "https://skillup.1onestrong.com/wp-content/uploads/2023/12/logo-preview-8-1.png",
    },
  ];

  return (
    <div className="w-full py-[28px]  grid grid-cols-3 xl:grid-cols-6 place-items-center ">
      {imgLink.map((img, index) => {
        return (
          <div className="w-[130px] sm:px-0 md:w-[220px] h-[100px]">
            <img
              className="transition ease-in-out duration-300 opacity-20 op hover:opacity-100"
              src={img.link}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};
