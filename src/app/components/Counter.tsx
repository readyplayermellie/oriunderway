import Image from 'next/image';

export default function Counter() {
    /* Declare variables */
    const numbers = [
        {
            title: '41 voet',
            subtitle: 'Onze Jeanneau Voyage 12.50 uit 1988',
            icon: '/sailboat-icon.png',
            iconAlt: 'Sailboat icon' 
        },
        {
            title: '3 zeilers',
            subtitle: 'Freek, Melanie en Mik de hond',
            icon: '/dog-icon.png',
            iconAlt: 'Dog icon' 
        },
        {
            title: '250 zeemijl',
            subtitle: 'Met haar gevaren sinds december 2023',
            icon: '/speed-icon.png',
            iconAlt: 'Amount of miles icon' 
        }
    ]

    return (
        <section className="mb-20 mt-20">
            <ul className="flex p-24">
                {numbers.map((item, index) => {
                    return <li className="text-center p-16 flex flex-col items-center" key={index}>
                        <Image src={item.icon} alt={item.iconAlt} width="90" height="90"></Image>
                        <h3 className="text-4xl font-bold">{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </li>
                })}
            </ul>
        </section>
    )
}