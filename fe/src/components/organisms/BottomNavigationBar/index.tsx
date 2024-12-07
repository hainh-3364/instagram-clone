import { Home, Search, ShoppingBag, LiveTv } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

export default function BottomNavigationBar() {
  return (
    <BottomNavigation className="flex items-center wーfull">
      <BottomNavigationAction
        className="p-0 min-w-[80px]"
        disableRipple
        icon={<Home />}
      />
      <BottomNavigationAction
        className="p-0 min-w-[80px]"
        disableRipple
        icon={<Search />}
      />
      <BottomNavigationAction
        className="p-0 min-w-[80px]"
        disableRipple
        icon={<LiveTv />}
      />
      <BottomNavigationAction
        className="p-0 min-w-[80px]"
        disableRipple
        icon={<ShoppingBag />}
      />
    </BottomNavigation>
  );
}
