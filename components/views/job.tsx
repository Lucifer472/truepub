"use client";

import Link from "next/link";
import { IoCloseCircle } from "react-icons/io5";
import { useOpeningChangeState } from "@/state";

export const JobOpening = () => {
  const [view, setView] = useOpeningChangeState((state) => [
    state.opening,
    state.setOpening,
  ]);

  if (view === 0) return;

  return (
    <div className="fixed top-0 left-0 h-full z-[99]">
      <div className="h-full md:grid md:grid-cols-4 relative overflow-hidden">
        <div className="col-span-1"></div>
        <div className="col-span-3 h-full bg-white overflow-y-scroll">
          {view && (
            <div className="ml-2 mt-24 md:ml-32 md:mt-32 flex flex-col gap-y-6 text-black pr-2 md:pr-16 pb-16">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extralight">
                Lead PHP Developer / PHP Architect
              </h2>
              <div className="grid-type-1 gap-x-2 font-medium">
                <p className="col-span-1 w-fit">Education:</p>
                <p className="col-span-1 w-fit">B.Tech,Msc,MCA,BCA</p>
                <p className="col-span-1 w-fit">Experience:</p>
                <p className="col-span-1 w-fit">Minimum of 8 Year</p>
                <p className="col-span-1 w-fit">Job Type:</p>
                <p className="col-span-1 w-fit">Full Time</p>
                <p className="col-span-1 w-fit">Job Location:</p>
                <p className="col-span-1 w-fit">
                  Gandhinagar,Gujarat - India 382421
                </p>
              </div>
              <p className="font-extralight">
                We zijn op zoek naar een Lead PHP Developer/PHP Architect met
                focus op backend development. Het betreft een nieuw af te
                splitsen domein van een bestaande monoliet met een sterke
                relatie naar de business.{" "}
              </p>
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extralight">
                Job Functions:
              </h3>
              <div className="flex flex-col items-start gap-y-2">
                <span>About the position you will get at Visymo</span>
                <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-normal">
                  <li>Lead PHP Developer / PHP Architect.</li>
                  <li>Focus on backend development and architecture.</li>
                  <li>
                    You coordinate the technical direction of your team with the
                    other team leads.
                  </li>
                  <li>
                    Together with IT OPS, you determine what is needed in terms
                    of infrastructure (systems/servers/processes) etc. (Ops sets
                    it up).
                  </li>
                </ul>
              </div>{" "}
              <div className="flex flex-col items-start gap-y-2">
                <span>You are Profile</span>
                <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-normal">
                  <li>Lead PHP Developer / PHP Architect.</li>
                  <li>Focus on backend development and architecture.</li>
                  <li>
                    You coordinate the technical direction of your team with the
                    other team leads.
                  </li>
                  <li>
                    Together with IT OPS, you determine what is needed in terms
                    of infrastructure (systems/servers/processes) etc. (Ops sets
                    it up).
                  </li>
                </ul>
              </div>{" "}
              <div className="flex flex-col items-start gap-y-2">
                <span>Domain:</span>
                <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-normal">
                  <li>Lead PHP Developer / PHP Architect.</li>
                  <li>Focus on backend development and architecture.</li>
                  <li>
                    You coordinate the technical direction of your team with the
                    other team leads.
                  </li>
                  <li>
                    Together with IT OPS, you determine what is needed in terms
                    of infrastructure (systems/servers/processes) etc. (Ops sets
                    it up).
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <span>What are you going to do?</span>
                <p className="font-normal text-justify">
                  Your position will revolve around collecting and unlocking
                  mission-critical data for business analyses. It is important
                  that everything runs smoothly and you are given ample
                  resources and options to do so. <br />
                  <br />
                  This concerns a new domain to be split off from an existing
                  monolith. You and the team will work with large amounts of
                  data, an extensive system with asynchronous task processing
                  and an internal domain specific programming language with
                  which our bidding processes are managed on a large scale.
                  <br />
                  <br />
                  Through processes such as code reviews, sparring sessions and
                  automated tests, you can help yourself and the team advance in
                  both your own development and monitoring the quality of the
                  systems.
                </p>
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <span>Techniques used</span>
                <p className="font-normal text-justify">
                  We gebruiken waar mogelijk de laatste stabiele releases van
                  PHP, frameworks en systemen. De technische keuzes qua coding
                  standards, gebruikte systemen en technieken stemmen houden we
                  zoveel mogelijk gelijk tussen de teams. In goed overleg is er
                  altijd ruimte voor verbetering en uitbreiding.
                </p>{" "}
                <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-normal">
                  <li>Lead PHP Developer / PHP Architect.</li>
                  <li>Focus on backend development and architecture.</li>
                  <li>
                    You coordinate the technical direction of your team with the
                    other team leads.
                  </li>
                  <li>
                    Together with IT OPS, you determine what is needed in terms
                    of infrastructure (systems/servers/processes) etc. (Ops sets
                    it up).
                  </li>
                </ul>
              </div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extralight">
                Over Visymo
              </h2>
              <p className="font-normal text-justify">
                Visymo Universal Search Group (sinds 1997) is de onzichtbare
                kracht achter waardevolle zoekresultaten. Strategische
                samenwerkingen met o.a. Google, Yahoo en Microsoft helpen ons
                daarbij. Wat begon in Nederland, is nu bijna in ieder land ter
                wereld beschikbaar. Visymo Universal Search Group heeft meer dan
                40 internationale merken en breidt nog steeds verder uit. <br />
                <br />
                Onze in-house ontwikkelde search technologie koppelt dagelijks
                miljoenen gebruikers aan relevante informatie. Om dat zo goed
                mogelijk te kunnen doen, zijn we voortdurend gefocust op
                datacollectie en –analyse, wat leidt tot nieuwe inzichten. Deze
                inzichten verwerken we in onze biedingsstrategieën en
                algoritmen. Content creëren we zelf, afgestemd op patronen in
                data en gedrag. Zo sluiten vraag en aanbod optimaal op elkaar
                aan. Daarbij kunnen wij altijd rekenen op onze strategische
                samenwerkingspartners Google, Yahoo en Microsoft.
                <br />
                <br />
                Wij doen het op onze manier. We proberen, durven, zetten door.
                We steken onze nek uit. Soms gaan we twee stappen vooruit en één
                terug, maar we blijven trouw aan onze identiteit. Bij ons geen
                standaard: alles is maatwerk. Succes motiveert ons door te gaan,
                maar het zijn onze focus en energie die ervoor zorgen dat we
                excelleren. Samen - op onze magische manier.
              </p>
              <div className="flex flex-col items-start gap-y-2">
                <span>We offer you?</span>
                <ul className="list-disc ml-8 flex flex-col items-start gap-y-2 font-normal">
                  <li>
                    Een uitdagende baan met veel zelfstandigheid in een jong,
                    ambitieus bedrijf met een unieke positie in de search
                    advertising markt.
                  </li>
                  <li>De mogelijkheid om thuis te werken.</li>
                  <li>Een toffe werkplek met een informele sfeer.</li>
                  <li>
                    Een competitief salaris en uitstekende secundaire
                    arbeidsvoorwaarden.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <span>Reageren</span>
                <p className="font-normal text-justify">
                  Do you want to be part of a fast-growing and international
                  company? Please contact us:
                  <Link
                    href="mailto:hr@trup@gmail.com"
                    className="underline text-sky-500"
                  >
                    {" "}
                    hr@visymo.com
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
        <button className="absolute top-8 right-8" onClick={() => setView(0)}>
          <IoCloseCircle className="text-black text-4xl" />
        </button>
      </div>
    </div>
  );
};
