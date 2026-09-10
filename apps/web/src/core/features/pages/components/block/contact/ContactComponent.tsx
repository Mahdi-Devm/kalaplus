import Contactdescription from "../../ui/contact/Contactdescription";
import ContactQuestion from "../../ui/contact/ContactQuestion";
import ContactSupport from "../../ui/contact/ContactSupport";
import ContactForm from "../../ui/contact/ContactForm";

const ContactComponent = () => {
  return (
    <>
      <div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch gap-8 px-5 py-10 md:flex-row md:gap-8 lg:gap-12">
          <div className="flex w-full md:w-1/2">
            <Contactdescription />
          </div>

          <div className="flex w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>

      <ContactQuestion />
      <ContactSupport />
    </>
  );
};

export default ContactComponent;
