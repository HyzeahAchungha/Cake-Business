export type FooterColumnProps = {
  title: string;
  variant: "explore" | "contact" | "newsletter";
  links?: Array<{
    text: string;
    href: string;
  }>;
  contactInfo?: {
    address: string;
    phone: string;
    email: string;
  };
  socialLinks?: {
    tiktok: string;
    whatsapp: string;
  };
  newsletterDescription?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent">
      <h3 className="text-white text-lg font-bold box-border caret-transparent leading-7 mb-6">
        {props.title}
      </h3>

      {props.variant === "explore" && props.links && (
        <ul className="text-[oklab(0.901998_0.0376404_-0.0504854_/_0.8)] box-border caret-transparent list-none pl-0">
          {props.links.map((link, index) => (
            <li
              key={index}
              className={`box-border caret-transparent ${index < props.links!.length - 1 ? "mb-4" : ""}`}
            >
              <a href={link.href} className="box-border caret-transparent">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}

      {props.variant === "contact" && props.contactInfo && (
        <>
          <ul className="text-[oklab(0.901998_0.0376404_-0.0504854_/_0.8)] box-border caret-transparent list-none mb-6 pl-0">
            <li className="items-start box-border caret-transparent gap-x-3 flex gap-y-3 mb-4">
              <img
                src="https://c.animaapp.com/mk2d2gqt1asXsp/assets/icon-6.svg"
                alt="Icon"
                className="text-[lab(64.5597_64.3615_-12.7988)] box-border caret-transparent h-5 w-5 mt-1"
              />
              <span className="box-border caret-transparent block">
                <span
                  className="box-border caret-transparent block"
                  dangerouslySetInnerHTML={{
                    __html: props.contactInfo.address.replace(
                      "\n",
                      '<br className="box-border caret-transparent" />',
                    ),
                  }}
                />
              </span>
            </li>
            <li className="items-center box-border caret-transparent gap-x-3 flex gap-y-3 mb-4">
              <img
                src="https://c.animaapp.com/mk2d2gqt1asXsp/assets/icon-7.svg"
                alt="Icon"
                className="text-[lab(64.5597_64.3615_-12.7988)] box-border caret-transparent h-5 w-5"
              />
              <span className="box-border caret-transparent block">
                {props.contactInfo.phone}
              </span>
            </li>
            <li className="items-center box-border caret-transparent gap-x-3 flex gap-y-3 mb-4">
              <img
                src="https://c.animaapp.com/mk2d2gqt1asXsp/assets/icon-8.svg"
                alt="Icon"
                className="text-[lab(64.5597_64.3615_-12.7988)] box-border caret-transparent h-5 w-5"
              />
              <span className="box-border caret-transparent block">
                <span
                  className="box-border caret-transparent block"
                  dangerouslySetInnerHTML={{
                    __html: props.contactInfo.email.replace(
                      "\n",
                      '<br className="box-border caret-transparent" />',
                    ),
                  }}
                />
              </span>
            </li>
          </ul>
          <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
            {props.socialLinks?.tiktok && (
              <a
                href={props.socialLinks.tiktok}
                className="text-[lab(64.5597_64.3615_-12.7988)] bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] box-border caret-transparent block p-2 rounded-[3.35544e+07px]"
              >
                <img
                  src="https://c.animaapp.com/mk2d2gqt1asXsp/assets/icon-9.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 w-4"
                />
              </a>
            )}
            {props.socialLinks?.whatsapp && (
              <a
                href={props.socialLinks.whatsapp}
                className="text-[lab(64.5597_64.3615_-12.7988)] bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] box-border caret-transparent block p-2 rounded-[3.35544e+07px]"
              >
                <img
                  src="https://c.animaapp.com/mk2d2gqt1asXsp/assets/icon-10.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 w-4"
                />
              </a>
            )}
          </div>
        </>
      )}

      {props.variant === "newsletter" && (
        <div className="text-[oklab(0.999994_0.0000455677_0.0000200868/0.6)]` bg-[oklab(0.999994_0.0000455678_0.0000200868/0.05)] box-border caret-transparent p-2 rounded-[3.35544e+07px]">
          <p>{props.newsletterDescription}</p>
        </div>
      )}
    </div>
  );
};