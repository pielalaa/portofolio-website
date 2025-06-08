import clsx from "clsx";
import { useState } from "react";
import { Collapse } from "react-collapse"; // Tetap gunakan Collapse dari langkah sebelumnya
import PropTypes from "prop-types"; // Impor prop-types

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-white max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-white transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "text-white",
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-purple-400 shadow-md transition-all duration-500 group-hover:border-pink-400",
            active && "before:bg-pink-400 after:rotate-0 after:bg-pink-400",
          )}
        >
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 size-11/12 rounded-full shadow-inner" />
        </div>
      </div>

      <Collapse isOpened={activeId === item.id}>
        <div className="body-3 px-7 py-3.5 text-white">{item.answer}</div>
      </Collapse>

      <div
        className={clsx(
          "absolute -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500",
          active && "opacity-100",
        )}
      >
        <div className="absolute inset-0.5 -z-1 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-pink-400" />
      </div>
    </div>
  );
};

// Tambahkan validasi propTypes
FaqItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default FaqItem;