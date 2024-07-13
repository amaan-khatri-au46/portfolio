import React from "react";
import { Link } from "react-router-dom";

export const Cta = () => {
  return (
    <section className="cta flex justify-between">
      <p className="text-[25px] font-bold">
        Have A Project in Mind ? <br className="sm:block hidden" />
        Let's Build Something together!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};
