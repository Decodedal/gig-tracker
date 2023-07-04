import { PrismaClient } from "@prisma/client";
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('password', 12);

  // Band members data with instruments
  const bandMembersData = [
      {
          name: "John Doe",
          address: "123 Main St",
          email: "johndoe@example.com",
          password: password,
          admin: false,
          instruments: ["Male Vocal", "Sax"],
      },
      {
          name: "Jane Smith",
          address: "456 Elm St",
          email: "janesmith@example.com",
          password: password,
          admin: true,
          instruments: ["Female Vocal", "Guitar"],
      },
      // Add more band members as needed
  ];

  // Instruments
  const instruments = ["Male Vocal", "Female Vocal", "Sax", "Trumpet", "Trombone", "Bass", "Guitar", "Drums", "Keyboard"];
  const instrumentsMap:{ [key: string]: number } = {};

  // Create instruments
  for (let instrument of instruments) {
      const createdInstrument = await prisma.instrument.create({
          data: { name: instrument }
      });
      instrumentsMap[instrument] = createdInstrument.id;
  }

  // Create band members
  for (let member of bandMembersData) {
      const { instruments, ...memberData } = member;
      const createdMember = await prisma.bandMember.create({
          data: memberData
      });

      // Create MusicianInstrument
      for (let instrument of instruments) {
          await prisma.musicianInstrument.create({
              data: {
                  bandMemberId: createdMember.id,
                  instrumentId: instrumentsMap[instrument]
              }
          });
      }
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
  });
