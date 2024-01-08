import Sheet from "@sihilelh/gsheet.db";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import BoardItem from "../Components/BoardItem";

export default function Board() {
  const params = useParams();
  const navigate = useNavigate();
  const boardData = (() => {
    try {
      let dtArr = `${atob(params.slug)}`.split(":");
      let dtSet = {
        doc_id: dtArr[0],
        update_every: dtArr[1],
        priority: dtArr[2],
      };
      if (
        dtSet.doc_id === undefined ||
        dtSet.priority === undefined ||
        dtSet.update_every === undefined
      )
        return false;
      return dtSet;
    } catch (error) {
      return false;
    }
  })(); // This is an annonimus function that decodes the slug
  const [sheetData, setSheetData] = useState([]);
  const [boardMetadata, setBoardMetadata] = useState({
    leaderboard_name: "Learboard",
    leaderboard_subtext: "",
    leaderboard_image: "FALSE",
  });
  useEffect(() => {
    if (!boardData) {
      toast.error("Invalid URL");
      navigate("/"); // If the url is invalid it will return to home
    }
    refresh();
    getMetadata();
    setInterval(refresh, boardData.update_every * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getMetadata() {
    try {
      const metasheet = new Sheet(boardData.doc_id, "metadata");
      let metadata = await metasheet.all();
      setBoardMetadata(metadata[0]);
    } catch (error) {
      toast.error("Unable to get the metadata", { id: "metadata" });
    }
  }

  async function refresh() {
    try {
      const sheet = new Sheet(boardData.doc_id, "board");
      let data = await sheet.all();
      setSheetData(
        data.sort((a, b) => {
          return b.points - a.points;
        })
      );
    } catch (error) {
      toast.error("Something went wrong while refreshing", { id: "ref" });
    }
  }

  return (
    <div className="flex w-full h-screen max-h-screen">
      <div className="w-[30%] p-10 bg-yellow-100 flex items-center justify-center flex-col">
        <div className="flex justify-center">
          {boardMetadata.leaderboard_image === false ||
          `${boardMetadata.leaderboard_image}`.toUpperCase() === "FALSE" ||
          boardMetadata.leaderboard_image === null ||
          boardMetadata.leaderboard_image === "" ||
          boardMetadata.leaderboard_image === undefined ? null : (
            <>
              <img
                src={boardMetadata.leaderboard_image}
                alt={boardMetadata.leaderboard_name}
                className="w-[50%] mb-4"
              />
            </>
          )}
        </div>
        <div className="text-3xl font-bold text-center">
          {boardMetadata.leaderboard_name}
        </div>
        <div className="text-sm text-yellow-700 text-center mt-2">
          {boardMetadata.leaderboard_subtext}
        </div>
        <div className="mt-4">
          <a
            className="text-sm opacity-60"
            target="_blank"
            rel="noreferrer"
            href={`https://docs.google.com/spreadsheets/d/${boardData.doc_id}`}
          >
            View GSheet
          </a>
        </div>
      </div>
      <div className="w-[70%] p-16 overflow-y-scroll max-h-screen">
        <div className="flex flex-col gap-4">
          {sheetData.map((dt, i) => {
            let place = sheetData[i - 1]
              ? sheetData[i - 1].points === dt.points
                ? i
                : i + 1
              : i + 1;
            return <BoardItem {...dt} {...boardData} place={place} />;
          })}
        </div>
      </div>
    </div>
  );
}
