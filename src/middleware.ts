import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface RedirectProps {
  from: string;
  to: string;
}

const redirects: RedirectProps[] = [
  {
    from: "hazetomika.hu",
    to: "https://open.spotify.com/artist/6ReXV4uF5wOP9sVFsHi5oX",
  },
  {
    from: "grasa.hu",
    to: "https://github.com/risdn",
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
    from: "golyak.hu",
    to: "https://okereso.hu",
  }
];

export function middleware(request: NextRequest) {
  const { host } = request.nextUrl;
  const redirect = redirects.find((r) => host.includes(r.from));

  return NextResponse.redirect(
    redirect?.to || "https://www.instagram.com/rst.ris/"
  );
}
