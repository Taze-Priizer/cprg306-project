import Link from "next/link";

export default function Page(){

    let personInfo = {
        personName: "Diem",
        personCertificate: "N/A",
        personAge: 23,
        personContact: "403-305-0865",
        personEmail: "diemsalaysay45@gmail.com",
        personAddress: {
            street:"",
            city: "Calgary", 
            province: "Alberta"},
        
    };

    let{
        personName,
        personCertificate,
        personAge:age,
        personContact:contact,
        personEmail:email,
        personAddress: {city, province}
    } = personInfo;



    return(
        <main className="bg-gray-100 p-4">

            <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
                <div className="inline-block bg-green-500 border border-red-500 my-5 p-3 mx-3">
                    <p className="font-bold text-heading sm:text-4xl text-2xl">Name: {personName}</p>
                    <p>Certificate: {personCertificate}</p>
                    <p>Age: {age}</p>
                    <p>Phone Number: {contact}</p>
                    <p className="text-align">Email: {email}</p>
                    <p>{city}, <b>{province}</b></p>
                </div>

                <div className="inline-block bg-green-500 border border-red-500 flex-items-center my-5 p-3 mx-3">
                    <h1 className="font-bold">Experience</h1>
                    <h2>Software Development at <Link href="https://www.sait.ca" className="underline">SAIT</Link> (2024-2025) </h2>
                </div>

                <div className="inline-block bg-green-500 border border-red-500 flex-items-center my-5 p-3 mx-3">
                    <h2>Skills</h2>
                    <h2>Database| Object-Oriented Programming| UI/UX| Software Analysis</h2>
                    <h2>Python| |HTML | CSS| JavaScript| Java| MySQL</h2>
                </div>
            <div>
            <h2>Background</h2>

            </div>
            <Link href="../">Back</Link>
            </div>
        </main>
    );
}