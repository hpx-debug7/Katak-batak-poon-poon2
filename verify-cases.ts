
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('Fetching cases from database...');
    try {
        const cases = await prisma.case.findMany({
            orderBy: { createdAt: 'desc' },
            take: 5,
            include: {
                lead: { select: { company: true, clientName: true } }
            }
        });

        console.log(`Found ${cases.length} recent cases.`);

        cases.forEach(c => {
            console.log('------------------------------------------------');
            console.log(`Case ID: ${c.caseId}`);
            console.log(`Case Number: ${c.caseNumber}`);
            console.log(`Status: ${c.processStatus}`);
            console.log(`Scheme: ${c.schemeType}`);
            console.log(`Assigned User: ${c.assignedProcessUserId}`);
            console.log(`Created At: ${c.createdAt}`);
            console.log(`Updated At: ${c.updatedAt}`);
            console.log(`Tenant ID: ${c.tenantId}`);
            // console.log(`Benefit Types: ${c.benefitTypes}`);
            console.log('------------------------------------------------');
        });
    } catch (err) {
        console.error('Error querying cases:', err);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
