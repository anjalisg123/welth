import { seedTransactions } from "@/actions/seed";

export async function GET() {
    const resullt = await seedTransactions();
    return Response.json(resullt);
}

