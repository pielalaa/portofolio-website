import clsx from "clsx";
import { Marker } from "./Marker.jsx";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 rounded-2xl overflow-hidden group-hover:before:opacity-100 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600 before:to-pink-500 before:opacity-20 transition-opacity duration-300">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill || "#f5d0fe"} />
        </span>

        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-10 font-poppins base-bold text-white uppercase">
          {children}
        </span>
      </span>

      <span className="absolute inset-0 rounded-2xl pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:blur-md before:bg-gradient-to-r before:from-purple-500 before:to-pink-400 before:opacity-40 glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 rounded-2xl shadow-md shadow-pink-300 group bg-gradient-to-r from-purple-700 to-pink-600",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 rounded-2xl shadow-md shadow-pink-300 group bg-gradient-to-r from-purple-700 to-pink-600",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
