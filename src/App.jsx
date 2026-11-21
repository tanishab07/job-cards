import Card from './component/Card'

const App = () => {

const jobPosts = [
  {
    img: "picture.jpg",
    name: "Tanisha Bhardwaj",
    datePosted: "Posted 5 Days Ago",
    tags: ["UI/UX", "User Interface", "Product Designer"],
    h2: "Looking for a creative UI/UX designer to build your app",
    para: "I'm growing my new startup and require a talented designer to create essential designs for my product.",
    pay: "$199"
  },
  {
    img: "https://i.pravatar.cc/150?img=12",
    name: "Sophia Williams",
    datePosted: "Posted 2 Days Ago",
    tags: ["ReactJS", "Web Development", "Frontend"],
    h2: "Need a creative frontend developer for our next big project",
    para: "We're building a modern web platform and looking for someone who loves creating beautiful and responsive interfaces.",
    pay: "$150"
  },
  {
    img: "https://i.pravatar.cc/150?img=33",
    name: "James Anderson",
    datePosted: "Posted 1 Week Ago",
    tags: ["MERN Stack", "Node.js", "MongoDB"],
    h2: "Looking for a skilled full stack developer to join our team",
    para: "Our growing company needs an experienced developer to build scalable applications and improve our existing platform.",
    pay: "$180"
  },
  {
    img: "https://i.pravatar.cc/150?img=45",
    name: "Olivia Martin",
    datePosted: "Posted 3 Days Ago",
    tags: ["Graphic Design", "Branding", "Creative"],
    h2: "Searching for a talented designer to bring our brand to life",
    para: "We need a creative mind to design engaging visuals, social media graphics, and branding materials for our business.",
    pay: "$95"
  },
  {
    img: "https://i.pravatar.cc/150?img=11",
    name: "Daniel Smith",
    datePosted: "Posted 10 Days Ago",
    tags: ["React Native", "Android", "iOS"],
    h2: "Want to build an amazing mobile experience for our users",
    para: "We're developing a new mobile application and searching for a developer who can turn our ideas into reality.",
    pay: "$170"
  },
  {
    img: "https://i.pravatar.cc/150?img=49",
    name: "Emily Johnson",
    datePosted: "Posted 2 Weeks Ago",
    tags: ["Product Design", "Figma", "Prototyping"],
    h2: "Looking for a product designer to shape our digital experience",
    para: "Join our creative team to design user-friendly products and transform complex ideas into simple experiences.",
    pay: "$160"
  },
  {
    img: "https://i.pravatar.cc/150?img=14",
    name: "Michael Brown",
    datePosted: "Posted 4 Days Ago",
    tags: ["Python", "API Development", "Database"],
    h2: "Hiring a backend developer to power our growing platform",
    para: "We need someone passionate about building secure APIs, managing databases, and creating reliable backend systems.",
    pay: "$145"
  },
  {
    img: "https://i.pravatar.cc/150?img=25",
    name: "Isabella Davis",
    datePosted: "Posted 3 Weeks Ago",
    tags: ["HTML/CSS", "Responsive UI", "Web Design"],
    h2: "Need a web designer to create stunning website layouts",
    para: "Our agency is looking for a designer who can create modern, responsive, and visually appealing websites.",
    pay: "$110"
  },
  {
    img: "https://i.pravatar.cc/150?img=68",
    name: "Ethan Wilson",
    datePosted: "Posted 6 Days Ago",
    tags: ["Artificial Intelligence", "Python", "Machine Learning"],
    h2: "Looking for an AI developer to build intelligent solutions",
    para: "We're exploring AI-powered products and need a developer who can help us build smart and innovative applications.",
    pay: "$220"
  },
  {
    img: "https://i.pravatar.cc/150?img=32",
    name: "Ava Thompson",
    datePosted: "Posted 10 Weeks Ago",
    tags: ["Content Writing", "SEO", "Marketing"],
    h2: "Searching for a creative storyteller to grow our brand",
    para: "We want someone who can create engaging content, develop marketing strategies, and connect with our audience.",
    pay: "$85"
  }
];

  return (
    <div className='parent'>
      {jobPosts.map(function(elem, idx){
        console.log(idx);

        return <div key={idx}>
          <Card img={elem.img} 
            name={elem.name}
            dateposted={elem.datePosted}
            tags={elem.tags}
            h2={elem.h2} 
            para={elem.para}
            pay={elem.pay}/>
        </div>
      })}
    </div>
  )
}

export default App