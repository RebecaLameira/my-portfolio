import Button from "../Button/Button";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";

const FloatingButton = () => {
  return (
    <div className="lg:block fixed bottom-24 end-6 hidden">
      <Button>
        {
          <Link href="/contact">
            <UserIcon className="h-6 w-6 text-white dark:text-black" />
          </Link>
        }
      </Button>
    </div>
  );
};

export default FloatingButton;
