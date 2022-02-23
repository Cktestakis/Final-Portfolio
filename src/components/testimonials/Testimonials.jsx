import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Madison Beane",
      title: "Assistant Quality Control Manager",
      img: "assets/madison.png",
      icon: "assets/linkedin.png",
      desc: "Cody is a professional and dependable asset to have on any team. Cody has helped develop a validation system, working well with others and alone on projects It is a pleasure to work with Cody knowing he will get the job done no matter the deadline given..",
    },
    {
      id: 2,
      name: "Mandeepkaur Saini",
      title: "Project Partner",
      img: "assets/mandee.png",
      icon: "assets/linkedin.png",
      desc: "Cody is a fantastic professional who brings all of the skills and expertise in app development. We were part of a team and worked for two projects during our bootcamp journey and the way he handles the errors is genuinely remarkable. He is a hardworking and dedicated person who will complete your project in a given time frame. He is professional, helpful, and positive person. It is a pleasure and honor to recommend Cody Ktestakis to anyone who wants to hire him. He is truly a gem. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
