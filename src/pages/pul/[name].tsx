import { useRouter } from 'next/router'
import type { GetStaticProps, GetStaticPaths } from "next";
import { PrismaClient } from "@prisma/client";

export interface PUL {
  id: number;
  name: string;
  introduction: string;
  sentence: string;
  subject: string;
  pul_elements: PulElement[];
}

export interface PulElement {
  id: number;
  question: string;
  answer: string;
  details: PulDetail[];
}

export interface PulDetail {
  id: number;
  description: string;
}

interface Props {
  pul: PUL;
}

export default function Pul({ pul }: Props) {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <h2>name : {name}</h2>
      <ul>
          <li key={pul.id}>
            <h2>Name : {pul.name}</h2>
            <p>introduction : {pul.introduction}</p>
            <p>sentence : {pul.sentence}</p>
            <p>subject : {pul.subject}</p>
          </li>
          <table>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {pul.pul_elements.map((element) => (
                  <tr key={element.id}>
                    <td>{element.question}</td>
                    <td>{element.answer}</td>
                    <td>
                      {element.details.map((detail) => (
                        <p key={detail.id}>{detail.description}</p>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.name !== 'string') {
    return {
      notFound: true,
    };
  }
  const prisma = new PrismaClient();
  const pul = await prisma.pUL.findUnique({
    where: {
      name: params.name,
    },
    include: {
      pul_elements: {
        include: {
          details: true,
        },
      },
    },
  });
  return { props: { pul } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient();
  const pULs = await prisma.pUL.findMany();
  const paths = pULs.map((pul) => ({ params: { name: pul.name } }));
  return { paths, fallback: false };
};