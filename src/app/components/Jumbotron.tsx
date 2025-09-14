import Image from 'next/image';
import NavBar from './NavBar';

export default function Jumbotron() {
    return (
        <div className="flex flex-row items-center">
            <Image src="/sailboat-header.jpg" alt="picture of Ori the sailboat" width="450" height="600"></Image>
            <div className="ml-20">
                <NavBar />
                <div className="w-100">
                    <h1 className="text-8xl">Ori <span className="italic text-xl">(nog niet)</span> Onderweg</h1>
                    <p className="p-4">Het grote avontuur van twee zeilers en een hond die ooit de wereld willen verkennen met hun zeilboot</p>
                </div>
            </div>
        </div>
    )
}