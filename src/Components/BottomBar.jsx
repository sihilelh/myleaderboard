import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 h-10 bg-yellow-100 w-full flex items-center px-6 justify-between">
      <div className="text-sm">
        My Leaderboard by{" "}
        <a
          className="text-yellow-700 font-semibold"
          rel="noreferrer"
          target="_blank"
          href="https://sihilel.com"
        >
          @sihilelh
        </a>
      </div>
      <div className="tex-sm flex items-center gap-4">
        <div>
          <a
            href="https://github.com/sihilelh/myleaderboard"
            rel="noreferrer"
            target="_blank"
          >
            Source Code
          </a>
        </div>
        <div>
          <a href="mailto:me@sihilel.com">Support</a>
        </div>
        <div>
          <Link to={"/about"}>How it works?</Link>
        </div>
      </div>
    </div>
  );
}
