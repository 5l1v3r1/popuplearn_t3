import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { PUL } from "~/types";

interface Props {
  pul: PUL;
}

export default function ComponentName({ pul }: Props): JSX.Element {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <div className="pul-window bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="pul-title-bar rounded-t-lg bg-gray-900 px-2 py-1">
          <div className="pul-title">
            <Link href={`/pul/${pul.name}`}>
              <h2 className="font-medium text-blue-200">Name : {pul.name}</h2>
            </Link>
          </div>
          <div className="pul-buttons">
            <button
              className="pul-close-btn p-1 text-gray-600 hover:text-gray-800"
              onClick={(event) => {
                const widget = (event.target as Element)?.closest(
                  ".pul-window"
                );
                if (widget) {
                  const content = widget.querySelector(
                    ".pul-content"
                  ) as HTMLElement;
                  if (content) {
                    content.style.display =
                      content.style.display === "none" ? "block" : "none";
                  }
                }
              }}
            ></button>
          </div>
        </div>
        <div className="pul-content px-4 py-2">
          <p className="font-medium text-white">subject : {pul.subject}</p>
          <p className="text-white">sentence : {pul.sentence}</p>
          <p className="text-white">introduction : {pul.introduction}</p>
          <button className="pul-button mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Click
          </button>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="pul-widget">
        <Link href={`/pul/${pul.name}`}>
          <h2>Name : {pul.name}</h2>
        </Link>
        <p>subject : {pul.subject}</p>
        <p>sentence : {pul.sentence}</p>
        <p>introduction : {pul.introduction}</p>
        <button>Click</button>
      </div>
     */
}
