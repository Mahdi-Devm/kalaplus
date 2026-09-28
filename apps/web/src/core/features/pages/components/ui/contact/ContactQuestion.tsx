import { H3, Muted } from "@/core/components/custom/ui/typography/Typography";
import { ItemComponentQuestionContact } from "../../../assets/mock/contact/contact";
import ContactComponentQuestion from "./ContactComponentQuestion";

const ContactQuestion = () => {
  return (
    <div>
      <div className=" mx-auto flex items-center m-8 justify-center ">
        <H3 className="text-center">
          سوالات متدوال <br />
          <Muted className="mt-5 text-center">
            پاسخ پرسش‌های پرتکرار مشتریان را اینجا مشاهده کنید.
          </Muted>
        </H3>
      </div>

      <div className=" mx-auto flex items-center justify-center">
        <div>
          {ItemComponentQuestionContact.map((item) => {
            return (
              <ContactComponentQuestion
                title={item.title}
                text={item.text}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactQuestion;
