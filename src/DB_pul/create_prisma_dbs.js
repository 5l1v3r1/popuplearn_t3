const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const prisma = new PrismaClient();

async function main() {
  const files = fs
    .readdirSync("src/DB_pul")
    .filter((file) => file.endsWith(".json"));

  for (const file of files) {
    const item = fs.readFileSync("src/DB_pul/" + file);
    const jsonData = JSON.parse(item.toString());
    console.log(`Try to create pUL ${jsonData.name} :`);

    const result = await prisma.PUL.create({
      data: {
        name: jsonData.name,
        subject: jsonData.subject,
        language_1: jsonData.language_1,
        language_2: jsonData.language_2,
        type: jsonData.type || "BUTTON",
        voice_1: jsonData.voice_1 || "",
        voice_2: jsonData.voice_2 || "",
        number: jsonData.number || "1",
        introduction: jsonData.introduction || "",
        sentence: jsonData.sentence || "",
        pul_elements: {
          create: jsonData.pul_elements.map((element) => ({
            question: element.question,
            answer: element.answer,
            details: {
              create: element.details?.map((description) => ({
                description: description,
              })),
            },
          })),
        },
      },
    });
    console.log(`Created pUL ${jsonData.name} with id: ${result.id}`);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
