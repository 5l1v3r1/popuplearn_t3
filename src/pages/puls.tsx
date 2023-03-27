import { GetStaticProps } from "next";
import { PrismaClient } from "@prisma/client";

export interface PUL {
  id: number;
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
  pULs: PUL[];
}

const prisma = new PrismaClient();

export default function Pul({ pULs }: Props) {
  return (
    <div>
      <h1>PULs</h1>
      <ul>
        {pULs.map((pul) => (
          <li key={pul.id}>
            <h2>introduction : {pul.introduction}</h2>
            <p>sentence : {pul.sentence}</p>
            <p>subject : {pul.subject}</p>
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const pULs = await prisma.pUL.findMany({
    include: {
      pul_elements: {
        include: {
          details: true,
        },
      },
    } as any,
  });
  return { props: { pULs } };
};

//FAIL, need to remove <Props> and add "as any"
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pULs = await prisma.pUL.findMany({
//     include: {
//       pul_elements: {
//         include: {
//           details: true,
//         },
//       },
//     },
//   });
//   return { props: { pULs } };
// };
