import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer className="bg-[#1a032e]">
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5 text-[#f5d0fe]/70">
            <p>Coded with love • Echimco 2025</p>
          </div>

          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-[#d8b4fe] transition-all duration-500 hover:text-[#f472d0]">
              Privacy Policy
            </p>
            <p className="text-[#d8b4fe] transition-all duration-500 hover:text-[#f472d0]">
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  className="social-icon transition duration-300 hover:opacity-80"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain brightness-0 invert hue-rotate-[280deg]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
