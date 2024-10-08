import React from "react";
import Layout from "../Layout/Layout";
import Head from "../components/Head";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

function ContactUs() {
  const contactData = [
    {
      id: 1,
      title: "Email Us",
      info: "Interactively grow backend ideas for cross platform models",
      icon: FiMail,
      contact: "realheritagecompany@gmail.com",
    },
    {
      id: 2,
      title: "Call Us",
      info: "Distinctely  grow backend ideas for cross platform models",
      icon: FiPhoneCall,
      contact: "+234 904 596 0668",
    },
    {
      id: 3,
      title: "Location",
      info: "No 5, Aladejebi street,oke-osun,ikere-ekiti,ekiti state",
      icon: FiMapPin,
      contact: "",
    },
  ];
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us" />
        <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">
          {contactData.map((item) => (
            <div
              key={item.id}
              className="border border-border flex-colo p-10 bg-dry rounded-lg text-center"
            >
              <span className="flex-colo mb-4 w-20 h-20 rounded-full bg-main text-subMain text-2xl">
                <item.icon />
              </span>
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="mb-0 text-sm text-text leading-7">
                <a href={`mailto:${item.contact}`} className="text-blue-600">
                  {item.contact}
                </a>
              </p>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
