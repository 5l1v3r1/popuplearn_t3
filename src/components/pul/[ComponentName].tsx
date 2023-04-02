import { useRouter } from "next/router";
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
      <div className="pul-widget">
        <Link href={`/pul/${pul.name}`}>
          <h2>Name : {pul.name}</h2>
        </Link>
        <p>subject : {pul.subject}</p>
        <p>sentence : {pul.sentence}</p>
        <p>introduction : {pul.introduction}</p>
        <button>Click</button>
      </div>
    </>
  );
}
