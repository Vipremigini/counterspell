import { useState } from "react";

import flare1 from "../art/flares/flare1.png";
import flare2 from "../art/flares/flare2.png";
import flare3 from "../art/flares/flare3.png";

export default function Locations() {
  const cities = [
    "Boston, MA",
    "New York City, NY",
    "Ottawa, ON",
    "Basking Ridge, NJ",
    "Austin, TX",
    "San Francisco, CA",
    "Burlington, VT",
    "Oshkosh, WI",
  ];

  const [submitBtn, setSubmitBtn] = useState("Sign up");

  return (
    <div className="neuebit py-24 px-12 bg-darker text-center retro relative -z-10">
      <p className="text-4xl uppercase">
        It's happening all around you
      </p>
      <div class="flex justify-center pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-3xl max-w-6xl w-full gap-8">
          {cities.map((city) => (
            <p className="lg:odd:text-left lg:even:text-right">{city}</p>
          ))}
        </div>
      </div>

      <div className="flex justify-center text-center text-3xl space-y-2 my-20">
        <div className="border-4 border-dashed border-pink py-6 px-6 neuebit tracking-wider text-4xl">
          <p>
            Counterspell is organized by teenagers, for teenagers.
          </p>
          <p>
            Don't see your city on the map? Sign up to organize here
          </p>
        </div>
      </div>

      <div className="flex items-center flex-col space-y-3 uppercase">
        <p className="text-center text-2xl">Get notified when sign ups open</p>
        <form
          method="post"
          action="https://app.loops.so/api/newsletter-form/clo3frr4v02f3jv0qqu6hgfqs"
          className="retro text-3xl flex flex-col lg:flex-row space-y-4 lg:space-y-0"
          onSubmit={handleSubmit}
        >
            <input type="email" name="email" className="outline-none border-4 lg:border-r-0 border-pink bg-transparent border-dashed px-4 h-20 lg:w-[500px]" placeholder="fiona@hackclub.com" required />
            <input type="hidden" name="userGroup" value="Hack Clubber" />
            <input type="hidden" name="mailingLists" value="cm1fqxdc900qn0ll9fd5m3wdv" />
            <button type="submit" className="uppercase bg-pink h-20 px-4 border-4 border-pink" id="formSubmit">{submitBtn}</button>
        </form>
      </div>

      <img
      src={flare1}
      alt=""
      className="w-48 absolute top-0 right-0"
      >
      </img>
      <div class="absolute left-0 top-0 bottom-0">
        <div class="flex items-center h-full">
          <img
          src={flare2}
          alt=""
          className="w-48 -z-10 opacity-80"
          >
          </img>
        </div>
      </div>
      <img
      src={flare3}
      alt=""
      className="w-48 absolute bottom-8 right-0"
      >
      </img>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(form)),
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          setSubmitBtn("Success");
        } else {
          setSubmitBtn("Error");
        }
      })
      .catch((error) => {
        setSubmitBtn("Error");
      });
  }
}
