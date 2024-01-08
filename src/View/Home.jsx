import Input from "../Components/Input";
import BottomBar from "../Components/BottomBar";
import Button from "../Components/Button";
import toast from "react-hot-toast";
import Sheet from "@sihilelh/gsheet.db";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  async function checkAndOpenLaederboard(evt) {
    evt.preventDefault();
    // Getting the form data to the data object
    let data = {};
    new FormData(evt.target).forEach((v, k) => {
      data[k] = v;
    });
    try {
      let sheet = new Sheet(data.sheet, ["board"]); // board is the sheet name
      let dataset = await sheet.all();
      console.log(dataset);
      if (dataset.length === 0) {
        toast.error("Check your google sheet again if it formated correctly.");
        return;
      }
      if (
        dataset[0].name === undefined ||
        dataset[0].image === undefined ||
        dataset[0].points === undefined
      ) {
        toast.error("Sheet format is wrong.");
        return;
      }
      toast.success("Sheet check done!");
      let slug = btoa(`${sheet.doc_id}:${data.update_every}:${data.priority}`); // This makes it easier to share the leaderboard
      navigate(`/board/${slug}`);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div>
          {/* Main Text */}
          <div className="text-center">
            <div className="text-5xl font-bold ">
              MY <span className="text-yellow-400">LEADERBOARD</span>
            </div>
            <div className="text-sm mt-2 text-neutral-500">
              A Simple Leaderboard Application that you can customize on your
              own
            </div>
            <div className="flex items-start justify-center mt-4">
              <div className="h-1 w-24 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          <div className="mt-8">
            <form onSubmit={checkAndOpenLaederboard}>
              <Input
                name="sheet"
                type="url"
                required
                label="Google Sheet Link"
              />
              <div className="text-xs text-neutral-500">
                First make a google sheet & copy{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1bsCWUE1Lyxywvb0rHA4YIHkXaShGn8v5dHbAYW_mIxQ/edit#gid=0"
                  className="text-blue-500 underline"
                >
                  this sheet
                </a>{" "}
                format to yours.
              </div>
              <div className="grid grid-cols-2 gap-4 my-2">
                <Input
                  label="Update Every (seconds)"
                  type="number"
                  defaultValue="5"
                  required
                  name="update_every"
                />
                <Input
                  label="Prioritize first (members)"
                  type="number"
                  defaultValue="3"
                  required
                  name="priority"
                />
              </div>
              <Button>Check & Open Leaderboard</Button>
            </form>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
}
