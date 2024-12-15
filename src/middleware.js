import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("tokenUser");
  console.log(token);

  // تحقق من وجود التوكن
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // إضافة رؤوس CORS (Cross-Origin Resource Sharing)
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", "*"); // للسماح بالوصول من أي نطاق
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH"); // السماح بأساليب HTTP معينة
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization"); // السماح برؤوس معينة مثل Authorization و Content-Type

  return response;
}

export const config = {
  matcher: [
    "/Profile",
    "/AddProduct",
    "/Products/Update/:path*",
    "/Products/Delete/:path*",
    "/Products/Upload/:path*",
    "/Categories/Update/:path*",
    "/AddCateogories",
  ],
};
