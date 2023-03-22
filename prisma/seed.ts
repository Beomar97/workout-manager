import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma: PrismaClient = new PrismaClient();

async function main(): Promise<void> {
  // create dummy workouts, exercises, and sets
  const workout1 = await prisma.workout.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Full Body Workout',
      description: 'Full Body Workout Plan',
      exercises: {
        create: [
          {
            id: 1,
            name: 'Squat',
            description: 'Squat Exercise',
            sets: {
              create: [
                {
                  reps: 6,
                  weight: 100,
                },
              ],
            },
          },
          {
            id: 2,
            name: 'Bench Press',
            description: 'Bench Press Exercise',
            sets: {
              create: [
                {
                  reps: 10,
                  weight: 50,
                },
                {
                  reps: 10,
                  weight: 50,
                },
              ],
            },
          },
          {
            id: 3,
            name: 'Leg Press',
            description: 'Leg Press Exercise',
            sets: {
              create: [
                {
                  reps: 12,
                  weight: 80,
                },
                {
                  reps: 12,
                  weight: 80,
                },
                {
                  reps: 12,
                  weight: 80,
                },
              ],
            },
          },
        ],
      },
    },
    include: {
      exercises: {
        include: {
          sets: true,
        },
      },
    },
  });

  console.log({ workouts: [workout1] });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
