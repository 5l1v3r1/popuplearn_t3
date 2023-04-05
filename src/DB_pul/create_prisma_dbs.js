const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const prisma = new PrismaClient();

//Make some subscriptions to PUL models
async function createSubscription(userId, pulId) {
  const newSubscription = await prisma.Subscription.create({
    data: {
      userId,
      pulId,
    },
  });
  return newSubscription;
}

async function createUser(name, email) {
  const newUser = await prisma.User.create({
    data: {
      name,
      email,
    },
  });
  return newUser;
}

async function main() {
  const files = fs
    .readdirSync("src/DB_pul/JSON/")
    .filter((file) => file.endsWith(".json"));

  try {
    //Create all PULs
    for (const file of files) {
      const item = fs.readFileSync("src/DB_pul/JSON/" + file);
      const jsonData = JSON.parse(item.toString());
      console.log(`Try to create pUL ${jsonData.name} :`);

      const result = await prisma.PUL.create({
        data: {
          name: jsonData.name,
          subject: jsonData.subject,
          language_1: jsonData.language_1,
          language_2: jsonData.language_2,
          type: jsonData.type || "",
          voice_1: jsonData.voice_1 || "",
          voice_2: jsonData.voice_2 || "",
          number: jsonData.number || "1",
          introduction: jsonData.introduction || "",
          sentence: jsonData.sentence || "",
          pul_elements: {
            create: jsonData.pul_elements
              ? jsonData.pul_elements.map((element) => ({
                  question: element.question,
                  answer: element.answer,
                  details: {
                    create: element.details.map((description) => description),
                  },
                }))
              : [],
          },
        },
      });
      console.log(`Created pUL ${jsonData.name} with id: ${result.id}`);
    }

    //Create a user
    const name = "John Doe";
    const email = "johndoe@example.com";
    const newUser = await createUser(name, email);
    console.log("\nCreated User : ", newUser);

    //Create a subscription
    const this_pul = await prisma.PUL.findUnique({
      where: {
        name: "pays_capitales",
      },
    });
    if (!this_pul) {
      console.log("PUL not found");
      return;
    } else {
      const newSubscription = await createSubscription(newUser.id, this_pul.id);
      console.log("Created Subscription:", newSubscription);
    }
  } catch (error) {
    console.error("Error :", error);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
