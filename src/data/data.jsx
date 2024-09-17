import { MdLocalGroceryStore } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa";
import { ImWordpress } from "react-icons/im";
import { SiNextdotjs } from "react-icons/si";
import { FaWebflow } from "react-icons/fa6";


//Skills card 
export const skillIcons = [
  { icon: "/assets/reacticon.png", label: "ReactJs" },
  { icon: "/assets/nextjs.png", label: "NextJs" },
  { icon: "/assets/javascript.png", label: "JavaScript" },
  { icon: "/assets/tailwind.png", label: "tailwind" },
  { icon: "/assets/bootstrap.png", label: "bootstrap" },
  { icon: "/assets/wordpress.png", label: "wordPress" },
  { icon: "/assets/webflow.png", label: "webFlow" },
  { icon: "/assets/figma.png", label: "figma" },

];


//Services Data
export const services = [
  {
    icon: <SiNextdotjs size={70} color="#fe4519" />,
    title: "Nextjs development",
    disc: "I specialize in developing high-performance web applications and websites using Next.js to deliver scalable and efficient solutions.",
  },
  {
    icon: <FaAppStoreIos size={70} color="#fe4519" />,
    title: "Web development",
    disc: "I will create websites using advanced front-end technologies for a modern, responsive design.",
  },
  {
    icon: <FaWebflow size={70} color="#fe4519" />,
    title: "webflow development",
    disc: "I will use Webflow to develop sleek and modern animated websites with cutting-edge designs.",
  },
 
  {
    icon: <ImWordpress size={70} color="#fe4519" />,
    title: "wordpress development",
    disc: "I will use WordPress to transform Figma designs into sleek, modern websites with precision and functionality.",
  },
  {
    icon: <MdLocalGroceryStore size={70} color="#fe4519" />,
    title: "Ecommerce development",
    disc: "I will develop sleek, modern e-commerce stores to enhance your online shopping experience.",
  },
 
];

//Project tabs data
export const tabsData = [
    { name: "all" },
    { name: "ReactJs" },
    { name: "NextJs" },
    { name: "Webflow" },
  ];

//Project Cards data
export  const projectData = [
    {
      id: 1,
      name: "Porfolio website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum ipsam, accusantium nobis deserunt magni.",
      link: "#",
      category: "reactjs",
      img:"/assets/l1.jpg"
    },
    {
      id: 2,
      name: "ecommerce website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum ipsam, accusantium nobis deserunt magni.",
      link: "#",
      category: "webflow",
      img:"/assets/l2.png",
    },
    {
      id: 3,
      name: "business website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum ipsam, accusantium nobis deserunt magni.",
      link: "#",
      category: "reactjs",
      img:"/assets/l3.jpg",
    },
    {
      id: 4,
      name: "Dashboard panel",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum ipsam, accusantium nobis deserunt magni.",
      link: "#",
      category: "webflow",
      img:"/assets/l4.jpg",
    },
    {
      id: 5,
      name: "agency website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum ipsam, accusantium nobis deserunt magni.",
      link: "#",
      category: "nextjs",
      img:"/assets/l5.png",
    },
    {
      id: 6,
      name: "Porfolio website",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum ipsam, accusantium nobis deserunt magni.",
      link: "#",
      category: "nextjs",
      img:"/assets/l6.png",
    },
  ];

  // Animations Variants and Properties
 export const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animations of children
        when: "beforeChildren",
      },
    },
  };
  
 export const childVariants = {
    hidden: ({ axis = "y", value = 50, scale = 1 } = {}) => ({
      opacity: 0,
      x: axis === "x" ? value : 0, // Use value for x-axis movement if 'x'
      y: axis === "y" ? value : 0, // Use value for y-axis movement if 'y'
      scale: scale,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1, // Reset the scale to original size
      transition: { type: "spring", stiffness: 40, damping: 15 },
    },
  };