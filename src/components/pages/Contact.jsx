import { useState, useRef, use } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

import { info } from "../../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_g7jxegq",
        "template_y7eqnam",
        {
          from_name: form.name,
          to_name: "Nguyễn Hoàng Nhật Tiến",
          from_email: form.email,
          to_email: "tiennguyenn002@gmail.com",
          phone: form.phone,
          message: form.message,
        },
        "ObOi5C29mItNjMRN7"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!!");
        }
      );
  };

  return (
    <div className="xl:mt-10 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your name <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email <span className="text-red-500">*</span>
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Phone Number
            </span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              minLength={10}
              maxLength={12}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message <span className="text-red-500">*</span>
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              required
              onChange={handleChange}
              placeholder="Type your message here"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="border border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500 py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl self-center cursor-pointer"
          >
            {loading ? "Sending ..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
      >
        <ul className="flex flex-col gap-10">
          {info.map(({ icon: Icon, title, description }, index) => {
            return (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <Icon className="text-[28px]" />
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{title}</p>
                  <h3 className="text-xl">{description}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
