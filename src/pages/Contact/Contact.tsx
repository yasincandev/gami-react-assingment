import { FC, useState } from "react";

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("Send Message");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
      setSubmitMessage("Message Sent!");
    }, 2000);
  };

  return (
    <div className="mt-20 w-full ">
      <div className=" mx-auto my-auto grid max-w-screen-2xl grid-cols-1 items-center justify-between gap-24 p-4 lg:grid-cols-2">
        <div className="mx-auto flex max-w-lg flex-col gap-4 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci
            sapien, malesuada sollicitudin mi vel, tristique eleifend metus.
          </p>

          <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-y-6 rounded-lg bg-white p-9 py-9 shadow-lg">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  id="fullName"
                  className="block w-full rounded-md border-gray-300 bg-gray-100 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Full name*"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 bg-gray-100 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="E-Mail*"
                />
              </div>

              <div>
                <label htmlFor="message" className="py-3 px-2">
                  Tell us more about your project*
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  rows={4}
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Message"
                />
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <button
                type="submit"
                className="mt-4 inline-flex h-14 w-44 justify-center rounded-md border border-transparent bg-mainBlue py-4 px-7 text-base font-medium text-white shadow-sm hover:bg-extendedBlue "
              >
                {isSubmitting ? <SpinnerCircle /> : submitMessage}
              </button>
            </div>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1504.5029506671972!2d29.009919349716697!3d41.047000035554134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d25a3c3495946b%3A0xa3047f4c016284e0!2sConrad%20%C4%B0stanbul%20Bosphorus!5e0!3m2!1str!2str!4v1675634101077!5m2!1str!2str"
          width={600}
          height={450}
          style={{ border: 0, borderRadius: "1rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;

const SpinnerCircle = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".spinner_z9k8{transform-origin:center;animation:spinner_StKS .75s infinite linear}@keyframes spinner_StKS{100%{transform:rotate(360deg)}}",
        }}
      />
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
        className="spinner_z9k8"
      />
    </svg>
  );
};
