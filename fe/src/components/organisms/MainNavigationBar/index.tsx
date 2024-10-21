import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { IconLogo } from "@/components/atoms/BaseIcons";

export default function NavigationBar() {
  return (
    <div className="flex justify-between w-full p-[14px]">
      <div className="flex items-center">
        <IconLogo />
        <KeyboardArrowDownIcon />
      </div>
      <div className="flex items-center gap-6">
        <FavoriteBorderIcon />
        <AddBoxOutlinedIcon />
      </div>
    </div>
  );
}
