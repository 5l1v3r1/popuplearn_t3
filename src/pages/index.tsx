import { PrismaClient } from "@prisma/client";
import { PUL } from "~/types";
import dynamic from "next/dynamic";

interface Props {
  PULs: PUL[];
}

export default function Puls({ PULs }: Props): JSX.Element {
  const DynamicComponentName = dynamic(
    () => {
      return import(`../components/pul/[ComponentName]`);
    }
    //SAME : () => import(`../components/pul/[ComponentName]`)
  );
  return (
    <>
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

// export const getStaticProps = async () => {
export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const PULs = await prisma.pUL.findMany();
  return { props: { PULs } };
};

// getServerSideProps and getStaticProps are both Next.js data fetching methods used to pre-fetch data before rendering a page. However, they work differently and are used for different purposes.

// Server-side Rendering (SSR) :
// getServerSideProps is a method that runs on the server-side on each request, and fetches the required data for the page. This makes it useful for situations where you need to fetch data that changes frequently, or where the data needs to be personalized based on the user's request. Because it runs on each request, it can be slower than getStaticProps.

// SSG - Static Site Generation :
// getStaticProps, on the other hand, is a method that runs at build time, and generates a static HTML page for each set of data fetched. This makes it useful for situations where you have data that doesn't change often and can be pre-rendered. Because it generates static pages, it is generally faster than getServerSideProps.

// It's important to note that getStaticProps can only be used on pages that don't have dynamic parameters in the URL, since it generates a static page for each set of data. In contrast, getServerSideProps can be used on any page, since it fetches data on each request.

// Overall, getStaticProps is recommended for situations where you have static data that doesn't change often, while getServerSideProps is recommended for situations where you have dynamic or personalized data that changes frequently.