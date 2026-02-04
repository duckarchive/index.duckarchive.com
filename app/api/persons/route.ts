import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const lastName = searchParams.get("lastName");
    const firstName = searchParams.get("firstName");
    const patronymic = searchParams.get("patronymic");
    const gender = searchParams.get("gender");
    const birthYearMin = searchParams.get("birthYearMin");
    const birthYearMax = searchParams.get("birthYearMax");
    const deathYearMin = searchParams.get("deathYearMin");
    const deathYearMax = searchParams.get("deathYearMax");
    const recordType = searchParams.get("recordType");
    const resourceType = searchParams.get("resourceType");
    const limit = Math.min(parseInt(searchParams.get("limit") || "50"), 1000);
    const offset = parseInt(searchParams.get("offset") || "0");

    // Build where clause dynamically
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = {};

    if (lastName) {
      where.last_name = { equals: lastName, mode: "insensitive" };
    }

    if (firstName) {
      where.first_name = { equals: firstName, mode: "insensitive" };
    }

    if (patronymic) {
      where.middle_name = { equals: patronymic, mode: "insensitive" };
    }

    if (gender) {
      where.is_male = gender === "male";
    }

    if (birthYearMin || birthYearMax) {
      where.birth_date_normalized = {};
      if (birthYearMin) {
        where.birth_date_normalized.gte = new Date(
          `${birthYearMin}-01-01T00:00:00Z`,
        );
      }
      if (birthYearMax) {
        where.birth_date_normalized.lte = new Date(
          `${birthYearMax}-12-31T23:59:59Z`,
        );
      }
    }

    if (deathYearMin || deathYearMax) {
      where.record_date_normalized = {};
      if (deathYearMin) {
        where.record_date_normalized.gte = new Date(
          `${deathYearMin}-01-01T00:00:00Z`,
        );
      }
      if (deathYearMax) {
        where.record_date_normalized.lte = new Date(
          `${deathYearMax}-12-31T23:59:59Z`,
        );
      }
    }

    if (recordType) {
      where.record_type = { equals: recordType, mode: "insensitive" };
    }

    if (resourceType) {
      where.resource_id = resourceType;
    }

    console.log("WHERE CLAUSE:", JSON.stringify(where));

    const persons = await prisma.person.findMany({
      where,
      take: limit,
      skip: offset,
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json(persons);
  } catch (error) {
    console.error("Error fetching persons:", error);
    return NextResponse.json(
      { error: "Failed to fetch persons" },
      { status: 500 },
    );
  }
}
