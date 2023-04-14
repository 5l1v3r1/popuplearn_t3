import { PrismaClient } from "@prisma/client";
import type { PUL } from "~/types";
import dynamic from "next/dynamic";

import { useSession } from "next-auth/react";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { api } from "~/utils/api";

interface Props {
  PULs: PUL[];
}

// async function createSubscription(userId: string, pulId: number) {
//     const newSubscription = await prisma.subscription.create({
//       data: {
//         userId,
//         pulId,
//       },
//     });
//     return newSubscription;
//   }

//RETRIEVE SUBSCRIBED PULS FOR USER
// const user = await prisma.user.findUnique({
//   where: { id: userId },
//   include: {
//     subscriptions: {
//       include: { pul: { include: { pul_elements: true } } },
//     },
//   },
// });
// const subscribedPULs = user.subscriptions.map((subscription) => subscription.pul);

export default function Subscribe({ PULs }: Props): JSX.Element {
  const { data: session } = useSession();
  //SAME : () => import(`../components/pul/[ComponentName]`)
  const DynamicComponentName = dynamic(() => {
    return import(`../components/pul/[ComponentName]`);
  });
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {/* <button onClick={() => signOut()}>Sign out</button> */}
        <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PULs.map((pul) => (
                <DynamicComponentName key={pul.id} pul={pul} />
              ))}
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      {/* Not signed in : <button onClick={() => signIn()}>Sign in</button> */}
      <main className="p-6 min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PULs.map((pul) => (
              <DynamicComponentName key={pul.id} pul={pul} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const PULs = await prisma.pUL.findMany();
  return { props: { PULs } };
};