import { db } from "@/db";
import { giftEnquiries } from "@/db/schema";

export const dynamic = "force-dynamic";

function valueFromForm(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function nullable(value: string) {
  return value.length > 0 ? value : null;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = valueFromForm(formData, "name");
    const phone = valueFromForm(formData, "phone");
    const email = valueFromForm(formData, "email");
    const city = valueFromForm(formData, "city");
    const product = valueFromForm(formData, "product");
    const occasion = valueFromForm(formData, "occasion");
    const message = valueFromForm(formData, "message");
    const photo = formData.get("photo");
    const photoName = photo instanceof File && photo.name ? photo.name.slice(0, 240) : null;

    if (!name || !phone || !product) {
      return Response.json(
        { ok: false, message: "Name, phone, and product are required." },
        { status: 400 },
      );
    }

    await db.insert(giftEnquiries).values({
      name,
      phone,
      email: nullable(email),
      city: nullable(city),
      product,
      occasion: nullable(occasion),
      message: nullable(message),
      photoName,
      source: "website",
    });

    return Response.json({
      ok: true,
      message: "Your personalized gift enquiry has been received.",
    });
  } catch (error) {
    console.error("Failed to create enquiry", error);
    return Response.json(
      { ok: false, message: "We could not submit your enquiry right now." },
      { status: 500 },
    );
  }
}
