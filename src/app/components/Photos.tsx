import Image from 'next/image';

export default function Photos() {
    return (
        <section className="pb-20 pt-20">
            <h2 className="text-4xl text-center pb-6">De Vibes</h2>
            <div className="flex">
                <Image src="/mik.jpg" alt="Picture of Mik the Dog" width="250" height="200" className="m-2"></Image>
                <Image src="/freek-dek.jpg" alt="Picture of Freek on deck" width="250" height="200" className="m-2"></Image>
                <Image src="/ori-1.jpg" alt="Picture of Ori with sundown" width="250" height="200" className="m-2"></Image>
                <Image src="/ori-2.jpg" alt="Picture of Ori the sailboat" width="250" height="200" className="m-2"></Image>
            </div>
        </section>
    )
}