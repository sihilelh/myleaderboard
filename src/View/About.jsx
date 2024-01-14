import { Link } from "react-router-dom";
import BottomBar from "../Components/BottomBar";

export default function About() {
  return (
    <div className="p-32">
      <h1 className="text-5xl mb-4 text-yellow-500 font-semibold">
        How this works?
      </h1>
      <div>
        I developed this app to test my latest npm package
        <code>
          <a href="https://www.npmjs.com/package/@sihilelh/gsheet.db">
            @sihilelh/gsheet.db
          </a>
        </code>{" "}
        and use it on a real-world application. This app works by constantly
        getting the Google sheet data at a certain interval of time. To get the
        data from the Google sheet I used my own package. I used React to build
        this front and for styling, I used Tailwind CSS (Ofc my favorite combo
        😉).
        <br />
        <br />
        <b>Okayy.. Let's dig deeper.</b>
        <br />
        How do we get the data from the Google sheet? Well, you know we can
        download a CSV from Google Sheets, right? Instead of downloading the
        file, we can get the CSV file content directly. First, I fetch the
        Google sheet CSV and after I get the CSV content, I parse the CSV so
        that the CSV data will stored in a JS Object. I like to do coding
        projects by using packages as little as I can. So as you guessed,{" "}
        <code>
          <a href="https://www.npmjs.com/package/@sihilelh/gsheet.db">
            @sihilelh/gsheet.db
          </a>
        </code>{" "}
        only uses JS fetch API. All the parsing and filtering are done without
        any other dependencies.
        <br />
        <br />
        What about this app? This app is a little demonstration to show the uses
        of the
        <code>
          <a href="https://www.npmjs.com/package/@sihilelh/gsheet.db">
            @sihilelh/gsheet.db
          </a>
        </code>{" "}
        package. You can make some awesome things with it too.{" "}
        <i>(Random idea: we can make a URL shortener using this package).</i> If
        you make something with this package let me know too.
        <br />
        <br />
        Until next time{" "}
        <i>
          <a
            href="https://sihilel.com"
            className="bg-emerald-400 px-2 py-0.5 rounded-md text-white"
          >
            sihilelh
          </a>
        </i>
        <br />
        <br />
        <div className="text-neutral-400">
          <u>
            <b> SOCIALS:</b>
          </u>
          <br />
          <a className="text-blue-400" href="https://instagram.com/sihilel.h">
            INSTAGRAM: https://instagram.com/sihilel.h
          </a>{" "}
          <br />
          <a className="text-blue-400" href="https://fb.com/sihilel.h">
            FACEBOOK: https://fb.com/sihilel.h
          </a>
        </div>
        <br />
        <br />
        <div className="text-center">
          <Link to={"/"}>{"<"} Back to Home</Link>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
