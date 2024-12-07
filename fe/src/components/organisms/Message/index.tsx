import { InputBase } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function Message() {
  return (
    <div className="flex items-center w-full gap-4 justify-around px-3">
      <InputBase
        className="w-[286px] border border-white rounded-2xl gap-2 px-4"
        placeholder="Send Message"
        inputProps={{ "aria-label": "message" }}
      />
      <FavoriteBorderIcon />
      <SendOutlinedIcon />
    </div>
  );
}
