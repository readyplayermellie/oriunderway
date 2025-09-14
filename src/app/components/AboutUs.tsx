import Image from 'next/image';

export default function AboutUs() {
    return (
        <section className="flex justify-center pb-20 pt-20">
            <Image src="/melfreekmik.jpg" alt="Image of Melanie and Freek the sailors" width="400" height="800"></Image>
            <div className="p-12 w-xl">
                <h3 className="text-4xl pb-6">Hi van ons,</h3>
                <p className="mb-3">Freek, Melanie en Mik de hond. Wij houden van zeilen.</p>
                <p className="mb-3">Ons grote plan is om aan boord van een zeilboot te wonen en de wereld te verkennen. Om dat te bereiken hebben we jaren van voorbereiding voor de boeg. In december 2023 hebben we de grootste stap tot nu toe gezet en een 41 ft. Jeanneau Voyage zeiljacht gekocht, Ori. Ze komt uit 1988 en heeft nog heel wat werk nodig voordat ze klaar is om met ons op ontdekkingstocht te gaan.</p>
                <p className="mb-3">De komende jaren gaan we haar opknappen, meer zeilervaring opdoen en proberen een lange lijst aan certificaten, vaardigheden en kennis af te vinken. We maken genoeg fouten waar we van leren, we moeten alles tot in de puntjes uitzoeken en deze kennis delen we graag met iedereen die dezelfde droom heeft of met ons wil dromen.</p>
                <p className="mb-3">Superleuk dat je er bent. Zeil je mee?</p>
            </div>
        </section>
    )
}