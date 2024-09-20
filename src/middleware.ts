import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface RedirectProps {
  from: string;
  to: string;
}

const redirects: RedirectProps[] = [
  {
    from: "hazetomika.hu",
    to: "https://www.instagram.com/paksaxx/",
  },
  {
    from: "grasa.hu",
    to: "https://github.com/RisDN",
  },
  {
    from: "anarchyv.hu",
    to: "https://github.com/RisDN",
  },
  {
    from: "fotoson.hu",
    to: "https://github.com/RisDN",
  },
  {
    from: "ibbigang.hu",
    to: "https://github.com/RisDN",
  },
  {
    from: "meluin.hu",
    to: "https://github.com/RisDN",
  },
  {
    from: "mihalyfiluca.hu",
    to: "https://github.com/RisDN",
  },
  {
    from: "rstris.hu",
    to: "https://github.com/RisDN",
  },
  {
    from: "trendybaby.hu",
    to: "https://github.com/RisDN",
  },
];

export function middleware(request: NextRequest) {
  const { host } = request.nextUrl;
  const redirect = redirects.find((r) => host.includes(r.from));

  return NextResponse.redirect(
    redirect?.to || "https://www.instagram.com/rst.ris/"
  );
}
