"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface Props {
  pageNumber: number;
  isNext?: boolean;  // Optional in case it's not always passed
  path: string;
}

function Pagination({ pageNumber, isNext = true, path }: Props) {
  const router = useRouter();

  const handleNavigation = (type: "prev" | "next") => {
    let nextPageNumber = pageNumber;

    if (type === "prev") {
      nextPageNumber = Math.max(1, pageNumber - 1);
    } else if (type === "next") {
      nextPageNumber = pageNumber + 1;
    }

    const fullPath = nextPageNumber > 1 ? `/${path}?page=${nextPageNumber}` : `/${path}`;
    router.push(fullPath);
  };

  if (!isNext && pageNumber === 1) return null;

  return (
    <div className="pagination">
      <Button
        onClick={() => handleNavigation("prev")}
        disabled={pageNumber === 1}
        aria-label="Go to previous page"
        className="!text-small-regular text-light-2"
      >
        Prev
      </Button>
      <p className="text-small-semibold text-light-1">{pageNumber}</p>
      <Button
        onClick={() => handleNavigation("next")}
        disabled={!isNext}
        aria-label="Go to next page"
        className="!text-small-regular text-light-2"
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
