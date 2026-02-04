import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type ButtonStProps = {
  title?: string;
  cursorP?: boolean;
  bgColor?: undefined | string;
  icon?: React.ReactNode;
};

export const title = "Button with Right Icon";

const ButtonSt = ({title ="Button", cursorP = false, bgColor = undefined, icon = undefined } : ButtonStProps) => (
  <Button className="gap-2" style={{ cursor: cursorP ? "pointer" : "default", backgroundColor: bgColor, color: bgColor === "#0000" ? "#fff" : undefined }}>
    {title || "More about me"}
    {icon || <ArrowRight className="size-4" />}
  </Button>
);

export default ButtonSt;
