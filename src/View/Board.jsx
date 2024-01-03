import Sheet from "@sihilelh/gsheet.db";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

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
  useEffect(() => {
    if (!boardData) {
      toast.error("Invalid URL");
      navigate("/"); // If the url is invalid it will return to home
    }
    setInterval(refresh, boardData.update_every * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function refresh() {
    try {
      const sheet = new Sheet(boardData.doc_id, "board");
      let data = await sheet.all();
      setSheetData(data);
    } catch (error) {
      toast.error("Something went wrong while refreshing", { id: "ref" });
    }
  }

  return <div>{JSON.stringify(sheetData)}</div>;
}
