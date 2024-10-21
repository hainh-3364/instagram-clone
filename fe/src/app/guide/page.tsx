import { BaseButton } from "@/components/atoms";
import { LightButton } from "@/components/molecules";
import { Message, MainNavigationBar } from "@/components/organisms";
import BottomNavigationBar from "@/components/organisms/BottomNavigationBar";
import ThemeSwitcher from "@/components/atoms/ThemeSwitcher";
import Providers from "../provider";

export default function Guide() {
  return (
    <Providers>
      <div className="flex flex-col gap-[9px]">
        <BaseButton size="xl">Follow</BaseButton>
        <div className="flex gap-[6px]">
          <BaseButton type="secondary" size="s">
            Message
          </BaseButton>
          <BaseButton type="secondary" size="s">
            Subscribe
          </BaseButton>
          <BaseButton type="secondary" size="s">
            Contact
          </BaseButton>
          <BaseButton type="secondary" size="sm">
            Hi
          </BaseButton>
        </div>
      </div>
      <div className="flex flex-col gap-[9px]">
        <BaseButton size="xl">Follow</BaseButton>
        <div className="flex gap-[6px] bg-slate-500">
          <BaseButton type="secondary" status="inactive">
            Message
          </BaseButton>
          <BaseButton type="secondary" status="inactive">
            Subscribe
          </BaseButton>
          <BaseButton type="secondary" status="inactive">
            Contact
          </BaseButton>
          <BaseButton type="secondary" size="sm" status="inactive">
            Hi
          </BaseButton>
        </div>
      </div>
      <br />
      <LightButton />
      <Message />
      <MainNavigationBar />
      <BottomNavigationBar />
      <ThemeSwitcher />
    </Providers>
  );
}
