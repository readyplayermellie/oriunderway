import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <>
        <nav className="flex justify-center">
            <ul className="flex">
                <li className="p-4"><Link href="/">Thuis</Link></li>
                {/* <li className="p-4">|</li>
                <li className="p-4"><Link href="/blog">Blog</Link></li>
                <li className="p-4">|</li>
                <li className="p-4"><Link href="/crew">Bemanning</Link></li> */}
            </ul>
            <div className="p-1 m-3 bg-white flex">
                <Link href="https://www.instagram.com/oriunderway" target="_blank">
                    <Image src="/instagram-icon.png" alt="instagram icon to page" width="32" height="32"></Image>
                </Link>
                <Link href="https://www.tiktok.com/@oriunderway" target="_blank">
                    <Image src="/tiktok-icon.png" alt="tiktok icon to page" width="32" height="32"></Image>
                </Link>
            </div>
        </nav>
        </>
    )
}