import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

function About({ endpoint }) {
  console.log(endpoint);

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <h5 className="my-3 font-medium">
        I am a Frontend Developer, I have passions for learning and sharing my knowledge
        with others as publicly as possible. Most of the time I worked with static
        website, but some technologies i enjoy working with includes react.js next.js as
        well as tailwind also
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I am doing</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;

// get-server-side props

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // console.log(process.env.HOST_URL);
  // // calculate something for the response
  // const res = await fetch(`${process.env.HOST_URL}/api/services`);
  // const data = await res.json();
  // console.log(data);

  return {
    props: {
      endpoint: process.env.HOST_URL,
    },
  };
};

// get-Static Props

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   // calculate something for the response
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log("SERVER", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
