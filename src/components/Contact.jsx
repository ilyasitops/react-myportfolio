import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="pb-20 border-b border-neutral-900">
      <h1 className="my-10 text-4xl text-center">Me contacter</h1>
      <div className="tracking-tighter text-center">
        <p className="my-4">{CONTACT.adress}</p>
        <p className="my-4">{CONTACT.phone}</p>
        <a href="#" class name="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
