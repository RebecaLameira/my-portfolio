import Content from "../../components/Content/Content";
import Trajectory from "../../components/Trajectory/Trajectory";

import { Metadata } from "next";
import FloatingButton from "../../components/Floating Button/FloatingButton";

export const metadata: Metadata = {
  title: "About Me - Portfolio Rebeca Lameira",
};

export default function AboutMe() {
  return (
    <div>
      <FloatingButton />
      <div>
        <Content />
        <Trajectory />
        <div className="h-4"></div>
      </div>
    </div>
  );
}
