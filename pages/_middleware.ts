import { NextRequest, NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    if (!token) {
      return NextResponse.rewrite(url);
    }
    // if (!token) {
    //   return NextResponse.redirect("/signin");
    // }
  }
}
